import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvg6d5bwa.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvg6d5bwa"/>`,
		"fallback": "fa6-solid:heart-circle-xmark",
	});
}

export default Component;
