import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/c/c87urq4yy.css';
import '../../css/r/ryuchjvkn.css';
import '../../css/z/z8ntjqb8q.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="c87urq4yy"/><path class="ryuchjvkn"/><path class="z8ntjqb8q"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:berber-flag",
	});
}

export default Component;
