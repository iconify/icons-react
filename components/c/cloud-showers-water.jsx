import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmb3o0bzf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmb3o0bzf"/>`,
		"fallback": "fa6-solid:cloud-showers-water",
	});
}

export default Component;
