import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om86e5bdk.css';
import '../../css/v/vfhujpbju.css';
import '../../css/j/jfd0h_bdk.css';
import '../../css/h/hhhzdkbwh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om86e5bdk"/><path class="vfhujpbju"/><path class="jfd0h_bdk"/><path class="hhhzdkbwh"/>`,
		"fallback": "material-icon-theme:hack",
	});
}

export default Component;
