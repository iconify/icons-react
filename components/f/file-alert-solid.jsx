import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3z-7f-xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3z-7f-xi"/>`,
		"fallback": "iconaut:file-alert-solid",
	});
}

export default Component;
