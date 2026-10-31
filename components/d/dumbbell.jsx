import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/ji0ukybgc.css';
import '../../css/i/ibczrqbly.css';
import '../../css/d/drbfuob2v.css';
import '../../css/i/iyr7fkjbg.css';
import '../../css/t/tfxfg-kbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ji0ukybgc wm-shadow"/><path class="ibczrqbly"/><path class="drbfuob2v"/><path class="iyr7fkjbg"/><path class="tfxfg-kbf"/></g>`,
		"fallback": "withicons-retro:dumbbell",
	});
}

export default Component;
