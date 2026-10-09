import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_vbgsb4a.css';
import '../../css/e/e4z-0xbtc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_vbgsb4a"/><path class="e4z-0xbtc"/>`,
		"fallback": "energy-icons:baby-20",
	});
}

export default Component;
