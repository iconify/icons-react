import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q30i1zmol.css';
import '../../css/j/jeqh-gtam.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q30i1zmol"/><path class="jeqh-gtam"/></g>`,
		"fallback": "streamline:cyborg-2",
	});
}

export default Component;
