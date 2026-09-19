import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haqwjhbxe.css';
import '../../css/t/thr3k1uvl.css';
import '../../css/h/hvl7cfmte.css';
import '../../css/k/kihdqmbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haqwjhbxe"/><path class="thr3k1uvl"/><path class="hvl7cfmte"/><path class="kihdqmbjc"/>`,
		"fallback": "ion:android-volume-off",
	});
}

export default Component;
