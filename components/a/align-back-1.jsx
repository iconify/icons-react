import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qzjuupm7f.css';
import '../../css/m/mnlme2nhi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qzjuupm7f"/><path class="mnlme2nhi"/></g>`,
		"fallback": "streamline-flex:align-back-1",
	});
}

export default Component;
