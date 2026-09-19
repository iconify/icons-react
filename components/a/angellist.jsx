import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skcxo6b4o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skcxo6b4o"/>`,
		"fallback": "fa7-brands:angellist",
	});
}

export default Component;
