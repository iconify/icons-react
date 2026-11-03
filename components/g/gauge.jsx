import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utovdcc_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utovdcc_a"/>`,
		"fallback": "sidekickicons:gauge",
	});
}

export default Component;
