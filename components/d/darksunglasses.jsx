import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2w7w-b-w.css';
import '../../css/q/q49xs08qd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2w7w-b-w"/><path class="q49xs08qd"/>`,
		"fallback": "fxemoji:darksunglasses",
	});
}

export default Component;
