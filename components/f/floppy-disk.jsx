import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w3hlyp8-d.css';
import '../../css/k/k9t8gacwp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w3hlyp8-d"/><path class="k9t8gacwp"/></g>`,
		"fallback": "streamline-flex:floppy-disk",
	});
}

export default Component;
