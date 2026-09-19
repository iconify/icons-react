import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rlijx1q8p.css';
import '../../css/o/oulh0ib2a.css';
import '../../css/v/vs7ixeb9e.css';
import '../../css/k/k2wokiz2q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rlijx1q8p"/><path class="oulh0ib2a"/><path class="vs7ixeb9e"/><path class="k2wokiz2q"/></g>`,
		"fallback": "glyphs:dice-outline",
	});
}

export default Component;
