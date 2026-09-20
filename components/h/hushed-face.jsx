import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/i/ipgfq6bhn.css';
import '../../css/k/k4z7zsbhp.css';
import '../../css/b/bqt1fxbrt.css';
import '../../css/n/n_h7qlzuy.css';
import '../../css/c/c9mfofy0x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><ellipse class="ipgfq6bhn"/><circle class="k4z7zsbhp"/><path class="bqt1fxbrt"/><ellipse class="n_h7qlzuy"/><path class="c9mfofy0x"/>`,
		"fallback": "openmoji:hushed-face",
	});
}

export default Component;
