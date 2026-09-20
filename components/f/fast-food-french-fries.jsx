import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go-v7hs9h.css';
import '../../css/k/klmre0b_i.css';
import '../../css/w/wf-ttibhp.css';
import '../../css/y/yf45qdbgu.css';
import '../../css/k/ksuzjwbzr.css';
import '../../css/f/fkiqv5b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="go-v7hs9h"/><path class="klmre0b_i"/><path class="wf-ttibhp"/><path class="yf45qdbgu"/><path class="ksuzjwbzr"/><path class="fkiqv5b7m"/></g>`,
		"fallback": "streamline-ultimate-color:fast-food-french-fries",
	});
}

export default Component;
