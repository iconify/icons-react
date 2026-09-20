import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/c/c3xb94qji.css';
import '../../css/x/xmuanygdx.css';
import '../../css/c/cjg205pee.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="c3xb94qji"/><path class="xmuanygdx"/><circle class="cjg205pee"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-taiwan",
	});
}

export default Component;
