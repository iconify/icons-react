import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jk-7otgew.css';
import '../../css/v/vl4n6h0hp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jk-7otgew"/><path class="vl4n6h0hp"/></g>`,
		"fallback": "streamline-flex:file-code-1",
	});
}

export default Component;
