import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u30ldabiv.css';
import '../../css/m/mydhkgbks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u30ldabiv"/><path class="mydhkgbks"/>`,
		"fallback": "cil:casino",
	});
}

export default Component;
