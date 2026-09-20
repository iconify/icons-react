import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/a/au2uu7bci.css';
import '../../css/p/pcc9ye47b.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="au2uu7bci"/><path class="pcc9ye47b"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-french-guiana",
	});
}

export default Component;
