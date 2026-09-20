import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk6o28bka.css';
import '../../css/c/c991nybxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk6o28bka"/><path class="c991nybxb"/>`,
		"fallback": "selfhst:android-auto-light",
	});
}

export default Component;
