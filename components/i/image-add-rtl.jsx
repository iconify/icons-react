import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdylx-b6p.css';
import '../../css/s/skx7sybde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdylx-b6p"/><path class="skx7sybde"/>`,
		"fallback": "ooui:image-add-rtl",
	});
}

export default Component;
