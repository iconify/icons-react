import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ye1j_vbjm.css';
import '../../css/w/w09m8o5ri.css';
import '../../css/i/iokyf-bir.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ye1j_vbjm"/><path class="w09m8o5ri"/><path class="iokyf-bir"/></g>`,
		"fallback": "streamline:color-swatches",
	});
}

export default Component;
