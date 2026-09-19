import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/c/c9x03gb1i.css';
import '../../css/d/dp0am7bls.css';
import '../../css/p/pn5a3ub8d.css';
import '../../css/n/n-96atbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><path class="c9x03gb1i"/><path class="dp0am7bls"/><path class="pn5a3ub8d"/><path class="n-96atbwh"/>`,
		"fallback": "gcp:catalog",
	});
}

export default Component;
