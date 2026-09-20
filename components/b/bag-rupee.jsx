import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m3yhu5b5l.css';
import '../../css/p/pcoc39b_k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m3yhu5b5l"/><path class="pcoc39b_k"/></g>`,
		"fallback": "streamline:bag-rupee",
	});
}

export default Component;
