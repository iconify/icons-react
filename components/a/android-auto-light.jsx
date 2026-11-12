import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd6taebzo.css';
import '../../css/c/c991nybxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd6taebzo"/><path class="c991nybxb"/>`,
		"fallback": "selfhst:android-auto-light",
	});
}

export default Component;
