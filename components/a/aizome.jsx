import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktnayv9ff.css';
import '../../css/c/cmf315bwz.css';
import '../../css/t/tb-jvs7gl.css';

const viewBox = {"width":125,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktnayv9ff"/><path class="cmf315bwz"/><path class="tb-jvs7gl"/>`,
		"fallback": "thesvg-color:aizome",
	});
}

export default Component;
