import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdptjablm.css';
import '../../css/n/nsdrsoimu.css';
import '../../css/l/l88o95l5d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tdptjablm"><path clip-rule="evenodd" class="nsdrsoimu"/><path class="l88o95l5d"/></g>`,
		"fallback": "devicon:github",
	});
}

export default Component;
