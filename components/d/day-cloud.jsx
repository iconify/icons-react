import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjoqwzbaz.css';
import '../../css/t/txhk-4h4m.css';
import '../../css/n/n585ngbol.css';
import '../../css/y/yrcp153ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjoqwzbaz"/><path class="txhk-4h4m"/><path class="n585ngbol"/><path class="yrcp153ve"/></g>`,
		"fallback": "streamline-cyber-color:day-cloud",
	});
}

export default Component;
