import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2lcubgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv2lcubgc"/>`,
		"fallback": "ion:android-cloud-done",
	});
}

export default Component;
