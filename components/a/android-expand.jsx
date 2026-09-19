import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu2qbi5aq.css';
import '../../css/a/akqi3gfxw.css';
import '../../css/t/tlaldtb5u.css';
import '../../css/j/jgthw4brg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu2qbi5aq"/><path class="akqi3gfxw"/><path class="tlaldtb5u"/><path class="jgthw4brg"/>`,
		"fallback": "ion:android-expand",
	});
}

export default Component;
