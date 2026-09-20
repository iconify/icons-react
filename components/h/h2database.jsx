import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrs-59bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrs-59bpy"/>`,
		"fallback": "simple-icons:h2database",
	});
}

export default Component;
