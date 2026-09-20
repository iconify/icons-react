import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/b/b778kib9g.css';
import '../../css/r/ryuchjvkn.css';
import '../../css/f/fdszxvb7z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="b778kib9g"/><path class="ryuchjvkn"/><path class="fdszxvb7z"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-azerbaijan",
	});
}

export default Component;
