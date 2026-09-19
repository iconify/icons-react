import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv67p9b9k.css';
import '../../css/u/unmzc2s1t.css';
import '../../css/a/a_oo1mbmr.css';
import '../../css/e/e7gwqvbfg.css';
import '../../css/s/sb-xycbpp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv67p9b9k"/><path class="unmzc2s1t"/><path class="a_oo1mbmr"/><path class="e7gwqvbfg"/><path class="sb-xycbpp"/>`,
		"fallback": "devicon:dart",
	});
}

export default Component;
