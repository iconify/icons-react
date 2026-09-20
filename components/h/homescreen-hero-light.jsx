import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfwzkkbni.css';
import '../../css/e/e7rt-sbkm.css';
import '../../css/u/ubnnzvb0h.css';
import '../../css/m/mlnhivbvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfwzkkbni"/><path class="e7rt-sbkm"/><path class="ubnnzvb0h"/><path class="mlnhivbvb"/>`,
		"fallback": "selfhst:homescreen-hero-light",
	});
}

export default Component;
