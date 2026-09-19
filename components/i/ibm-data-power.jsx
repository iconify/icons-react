import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-s_d2w1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-s_d2w1f"/>`,
		"fallback": "carbon:ibm-data-power",
	});
}

export default Component;
