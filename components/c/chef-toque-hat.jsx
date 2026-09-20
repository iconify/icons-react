import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xvrs2jbou.css';
import '../../css/e/egjm0-bdg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xvrs2jbou"/><path class="egjm0-bdg"/></g>`,
		"fallback": "streamline-flex:chef-toque-hat",
	});
}

export default Component;
