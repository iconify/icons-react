import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/r73utib8z.css';
import '../../css/d/duy2v2t-d.css';
import '../../css/q/qvywvgb0u.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="r73utib8z"/><path class="duy2v2t-d"/><path class="qvywvgb0u"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-kuwait",
	});
}

export default Component;
