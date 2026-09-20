import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ph1w6kzrw.css';
import '../../css/o/okl7rfikj.css';
import '../../css/r/rxs2pepgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ph1w6kzrw"/><circle class="okl7rfikj"/><circle class="rxs2pepgs"/></g>`,
		"fallback": "streamline:computer-robot-cyborg-artificial-robotics-robot-intelligence-machine-technology-android",
	});
}

export default Component;
