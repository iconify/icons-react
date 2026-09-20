import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/c/ccjh3ccuz.css';
import '../../css/u/ublbh3buy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="ccjh3ccuz"/><path class="ublbh3buy"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-malta",
	});
}

export default Component;
