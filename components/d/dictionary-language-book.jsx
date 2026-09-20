import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g16n08bwg.css';
import '../../css/w/wogt3wuuk.css';
import '../../css/n/nz5k327ms.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g16n08bwg"/><path class="wogt3wuuk"/><path class="nz5k327ms"/></g>`,
		"fallback": "streamline-flex:dictionary-language-book",
	});
}

export default Component;
