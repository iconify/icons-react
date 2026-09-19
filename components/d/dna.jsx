import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf0zdtb0j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf0zdtb0j"/>`,
		"fallback": "fa6-solid:dna",
	});
}

export default Component;
