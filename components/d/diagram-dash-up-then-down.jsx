import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z_o135b7f.css';
import '../../css/v/vf6f1tcpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z_o135b7f"/><path class="vf6f1tcpj"/></g>`,
		"fallback": "streamline-ultimate:diagram-dash-up-then-down",
	});
}

export default Component;
