import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_wkv8bja.css';
import '../../css/p/pv_j-gb0w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_wkv8bja"/><path class="pv_j-gb0w"/>`,
		"fallback": "carbon:infrastructure-classic",
	});
}

export default Component;
