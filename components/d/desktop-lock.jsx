import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lj7tznekf.css';
import '../../css/w/wa5yyab_y.css';
import '../../css/g/glsl5ab5m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lj7tznekf"/><path class="wa5yyab_y"/><path class="glsl5ab5m"/></g>`,
		"fallback": "streamline-flex:desktop-lock",
	});
}

export default Component;
