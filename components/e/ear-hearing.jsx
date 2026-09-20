import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c1kginpzj.css';
import '../../css/r/r66509b6r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c1kginpzj"/><path class="r66509b6r"/></g>`,
		"fallback": "streamline:ear-hearing",
	});
}

export default Component;
