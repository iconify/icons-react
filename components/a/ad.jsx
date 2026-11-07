import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajg2r_b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajg2r_b8p"/>`,
		"fallback": "sidekickicons:ad",
	});
}

export default Component;
