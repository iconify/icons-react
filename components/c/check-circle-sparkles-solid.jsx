import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uojy0ix4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uojy0ix4w"/>`,
		"fallback": "iconaut:check-circle-sparkles-solid",
	});
}

export default Component;
