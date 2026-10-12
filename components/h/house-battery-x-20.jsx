import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzof660bj.css';
import '../../css/y/yyppkb8-k.css';
import '../../css/w/w-uqq1-3d.css';
import '../../css/e/e-k2efb3t.css';
import '../../css/v/v4iautbkp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzof660bj"/><path class="yyppkb8-k"/><path class="w-uqq1-3d"/><path class="e-k2efb3t"/><path class="v4iautbkp"/>`,
		"fallback": "energy-icons:house-battery-x-20",
	});
}

export default Component;
