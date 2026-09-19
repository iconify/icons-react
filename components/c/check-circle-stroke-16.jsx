import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qiprx5bif.css';
import '../../css/h/hde0f9hoe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="qiprx5bif"/><circle class="hde0f9hoe"/></g>`,
		"fallback": "garden:check-circle-stroke-16",
	});
}

export default Component;
