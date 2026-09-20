import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quv4pachk.css';
import '../../css/h/hou8klbpj.css';
import '../../css/z/zsp-qfjre.css';
import '../../css/r/r9338kb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="quv4pachk"/><path class="hou8klbpj"/><path class="zsp-qfjre"/><path class="r9338kb2t"/></g>`,
		"fallback": "streamline-cyber-color:computer-ram",
	});
}

export default Component;
