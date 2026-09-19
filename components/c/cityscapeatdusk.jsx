import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcwvm_w5y.css';
import '../../css/r/rebtmz_8a.css';
import '../../css/c/cdjz1qbpw.css';
import '../../css/i/issw8ybpq.css';
import '../../css/h/hi90qgeed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcwvm_w5y"/><path class="rebtmz_8a"/><path class="cdjz1qbpw"/><path class="issw8ybpq"/><path class="hi90qgeed"/>`,
		"fallback": "fxemoji:cityscapeatdusk",
	});
}

export default Component;
