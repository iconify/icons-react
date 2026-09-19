import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehgp38b5l.css';
import '../../css/o/ox2s57r5r.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/e/ev1m50quq.css';
import '../../css/t/tpqvwt22v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehgp38b5l"/><path class="ox2s57r5r"/><circle class="e39ud6bwf"/><path class="ev1m50quq"/><path class="tpqvwt22v"/>`,
		"fallback": "carbon:accessibility-color-filled",
	});
}

export default Component;
