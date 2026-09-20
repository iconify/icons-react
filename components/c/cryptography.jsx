import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i9kx-7laj.css';
import '../../css/c/cg_xnnvfh.css';
import '../../css/m/m0cypi6yc.css';
import '../../css/f/fkp657udb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i9kx-7laj"/><path class="cg_xnnvfh"/><path class="m0cypi6yc"/><path class="fkp657udb"/></g>`,
		"fallback": "reicon:cryptography",
	});
}

export default Component;
