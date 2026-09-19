import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9ul_lbcj.css';
import '../../css/r/r32kt6-tp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9ul_lbcj"/><path class="r32kt6-tp"/>`,
		"fallback": "ei:archive",
	});
}

export default Component;
