import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/ray2ttbcr.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/f/fns2mtbmy.css';
import '../../css/s/s_svs0b4j.css';
import '../../css/j/jvn23xwfy.css';
import '../../css/n/n2b5zpqag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ray2ttbcr wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="fns2mtbmy wm-k"/><path class="s_svs0b4j wm-shine"/><path class="jvn23xwfy wm-s"/><path class="n2b5zpqag wm-a"/></g>`,
		"fallback": "withicons:crystal-ball-blueprint",
	});
}

export default Component;
