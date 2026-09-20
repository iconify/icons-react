import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qhgcutbto.css';
import '../../css/z/zn7zw28fg.css';
import '../../css/j/j81ci_anf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qhgcutbto"/><path class="zn7zw28fg"/><path class="j81ci_anf"/></g>`,
		"fallback": "streamline-flex:galaxy-2",
	});
}

export default Component;
