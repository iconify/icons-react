import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd2vdecpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd2vdecpf"/>`,
		"fallback": "fa6-solid:blender",
	});
}

export default Component;
