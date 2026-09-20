import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dx02zjbfc.css';
import '../../css/v/vpmjg3bfz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dx02zjbfc"/><path class="vpmjg3bfz"/></g>`,
		"fallback": "streamline-flex:carrot",
	});
}

export default Component;
