import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mlg4c_bvm.css';
import '../../css/j/jf2z2fbdb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mlg4c_bvm"/><path class="jf2z2fbdb"/></g>`,
		"fallback": "streamline:hierarchy-7",
	});
}

export default Component;
