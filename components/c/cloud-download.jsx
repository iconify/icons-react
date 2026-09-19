import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1alc3bdk.css';
import '../../css/u/uborx5bey.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1alc3bdk"/><path class="uborx5bey"/>`,
		"fallback": "carbon:cloud-download",
	});
}

export default Component;
