import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c1ykcdxxs.css';
import '../../css/d/d-pvs5dju.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c1ykcdxxs"/><path class="d-pvs5dju"/></g>`,
		"fallback": "streamline-flex:diamond-1",
	});
}

export default Component;
