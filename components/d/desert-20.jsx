import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmratjbob.css';
import '../../css/a/av226wb2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmratjbob"/><path class="av226wb2v"/>`,
		"fallback": "energy-icons:desert-20",
	});
}

export default Component;
