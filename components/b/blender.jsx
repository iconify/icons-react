import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnv6cykfw.css';
import '../../css/j/jjf3s4bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnv6cykfw"/><path class="jjf3s4bir"/>`,
		"fallback": "bxl:blender",
	});
}

export default Component;
