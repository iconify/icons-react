import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tkin544mf.css';
import '../../css/t/ttvy_6bvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tkin544mf"/><path class="ttvy_6bvj"/></g>`,
		"fallback": "streamline:back-camera-1",
	});
}

export default Component;
