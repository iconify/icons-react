import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow062hf4j.css';
import '../../css/v/vy3r78bjp.css';
import '../../css/n/najaevbea.css';
import '../../css/j/jed90wb7i.css';
import '../../css/t/twqjupqbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ow062hf4j"/><path class="vy3r78bjp"/><path class="najaevbea"/><path class="jed90wb7i"/><path class="twqjupqbh"/></g>`,
		"fallback": "streamline-cyber-color:computer-imac-check",
	});
}

export default Component;
