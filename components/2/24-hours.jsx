import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvjt2gvvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvjt2gvvm"/>`,
		"fallback": "guidance:24-hours",
	});
}

export default Component;
