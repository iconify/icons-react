import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2s8y9bcp.css';
import '../../css/p/pnjckj3dw.css';

const viewBox = {"width":73.721,"height":25.069};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2s8y9bcp"/><path class="pnjckj3dw"/>`,
		"fallback": "thesvg-color:ameriprise-financial",
	});
}

export default Component;
