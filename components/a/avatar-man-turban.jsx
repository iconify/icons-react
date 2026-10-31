import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ncuw7941y.css';
import '../../css/i/iccm8ccnl.css';
import '../../css/r/r2uva5b1a.css';
import '../../css/x/x0val9bto.css';
import '../../css/o/o0i6hszit.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/p/p2zg_-bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ncuw7941y wm-shadow"/><path class="iccm8ccnl"/><path class="r2uva5b1a"/><path class="x0val9bto"/><path class="o0i6hszit"/><path class="kx3zikbiq"/><path class="p2zg_-bar"/></g>`,
		"fallback": "withicons-brutal:avatar-man-turban",
	});
}

export default Component;
