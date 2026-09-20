import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv91rzblu.css';
import '../../css/q/qsg0-jb6l.css';
import '../../css/r/rndt1hbdt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv91rzblu"/><path class="qsg0-jb6l"/><path class="rndt1hbdt"/>`,
		"fallback": "nimbus:fingerprint",
	});
}

export default Component;
