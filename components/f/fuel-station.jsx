import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a2g9elbyt.css';
import '../../css/o/ootkfz6rc.css';
import '../../css/z/zw-iqyb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a2g9elbyt"/><path class="ootkfz6rc"/><path class="zw-iqyb4p"/></g>`,
		"fallback": "hugeicons:fuel-station",
	});
}

export default Component;
