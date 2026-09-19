import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/had8q-s7j.css';
import '../../css/t/te9g7bbon.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="had8q-s7j"/><path class="te9g7bbon"/></g>`,
		"fallback": "icon-park-outline:histogram",
	});
}

export default Component;
