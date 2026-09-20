import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nkttnybzi.css';
import '../../css/j/jk0-nrexg.css';
import '../../css/g/g85dxp_fw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nkttnybzi"/><path class="jk0-nrexg"/><path class="g85dxp_fw"/></g>`,
		"fallback": "streamline:computer-pc-desktop",
	});
}

export default Component;
