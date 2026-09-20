import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fivsqtb8r.css';
import '../../css/n/n9mytcbcc.css';
import '../../css/g/g23qkdbdy.css';
import '../../css/t/tfxf1zbvn.css';
import '../../css/i/ixd96fbof.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fivsqtb8r"/><path class="n9mytcbcc"/><path class="g23qkdbdy"/><path class="tfxf1zbvn"/><path class="ixd96fbof"/></g>`,
		"fallback": "streamline-color:cane",
	});
}

export default Component;
