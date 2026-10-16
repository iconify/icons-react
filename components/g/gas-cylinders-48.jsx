import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65-ehvfy.css';
import '../../css/x/xfh1s7buy.css';
import '../../css/d/dng6bccas.css';
import '../../css/f/f_gjw-adj.css';
import '../../css/m/mo425c3ds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65-ehvfy"/><path class="xfh1s7buy"/><path class="dng6bccas"/><path class="f_gjw-adj"/><path class="mo425c3ds"/>`,
		"fallback": "energy-icons:gas-cylinders-48",
	});
}

export default Component;
