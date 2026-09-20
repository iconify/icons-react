import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4w6i6b8i.css';
import '../../css/u/uyqtxdb1p.css';
import '../../css/j/j5g68mb7c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4w6i6b8i"/><path class="uyqtxdb1p"/><path class="j5g68mb7c"/>`,
		"fallback": "openmoji:black-large-square",
	});
}

export default Component;
