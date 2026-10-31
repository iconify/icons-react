import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajviypb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajviypb8d"/>`,
		"fallback": "sidekickicons:archive-box-arrow-up",
	});
}

export default Component;
