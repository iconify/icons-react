import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzof660bj.css';
import '../../css/y/yyppkb8-k.css';
import '../../css/w/w-uqq1-3d.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzof660bj"/><path class="yyppkb8-k"/><path class="w-uqq1-3d"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:house-battery-check-20",
	});
}

export default Component;
