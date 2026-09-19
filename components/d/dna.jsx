import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z07gkobjv.css';
import '../../css/f/fbk2zmjfg.css';
import '../../css/s/smogyebba.css';
import '../../css/e/eusfoibjp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z07gkobjv"/><path class="fbk2zmjfg"/><path class="smogyebba"/><path class="eusfoibjp"/></g>`,
		"fallback": "fluent-emoji-flat:dna",
	});
}

export default Component;
