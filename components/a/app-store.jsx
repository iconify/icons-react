import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pw2m6om7i.css';
import '../../css/v/v2qcuu2pi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pw2m6om7i"/><path class="v2qcuu2pi"/></g>`,
		"fallback": "streamline:app-store",
	});
}

export default Component;
