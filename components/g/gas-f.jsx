import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hvm5pohcm.css';
import '../../css/o/on8f5nbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hvm5pohcm"/><path class="on8f5nbpz"/></g>`,
		"fallback": "streamline-ultimate:gas-f",
	});
}

export default Component;
