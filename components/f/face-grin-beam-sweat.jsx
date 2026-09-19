import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc78wxt7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc78wxt7j"/>`,
		"fallback": "fa6-solid:face-grin-beam-sweat",
	});
}

export default Component;
