import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/y/yqjcuo46u.css';
import '../../css/u/uaab9vbqh.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="yqjcuo46u"/><path class="uaab9vbqh"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-lithuania",
	});
}

export default Component;
