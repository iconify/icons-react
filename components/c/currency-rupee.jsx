import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sddv5gf_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sddv5gf_x"/>`,
		"fallback": "carbon:currency-rupee",
	});
}

export default Component;
