import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siel51bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siel51bpy"/>`,
		"fallback": "streamline-ultimate:composition-focus-square-bold",
	});
}

export default Component;
