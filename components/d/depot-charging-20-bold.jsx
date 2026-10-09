import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiuahbcqc.css';
import '../../css/n/nri5-qgzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiuahbcqc"/><path class="nri5-qgzr"/>`,
		"fallback": "energy-icons:depot-charging-20-bold",
	});
}

export default Component;
