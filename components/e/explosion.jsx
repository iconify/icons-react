import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1m3h6bpb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1m3h6bpb"/>`,
		"fallback": "fa6-solid:explosion",
	});
}

export default Component;
