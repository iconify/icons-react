import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyxar1duk.css';
import '../../css/t/troui9b3i.css';
import '../../css/q/qgspc2bqu.css';
import '../../css/y/yhddlztib.css';
import '../../css/z/zr4hskbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yyxar1duk"/><path class="troui9b3i"/><path class="qgspc2bqu"/><path class="yhddlztib"/><path class="zr4hskbpm"/></g>`,
		"fallback": "streamline-cyber-color:batman",
	});
}

export default Component;
