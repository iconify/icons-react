import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/plcngepyd.css';
import '../../css/c/cz_0i9bjm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="plcngepyd"/><path class="cz_0i9bjm"/></g>`,
		"fallback": "streamline-flex:bag-suitcase-4",
	});
}

export default Component;
