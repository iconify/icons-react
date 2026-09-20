import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6ntrhbag.css';
import '../../css/d/d47zgac9l.css';
import '../../css/h/hjy07h-_o.css';
import '../../css/e/e1xt7abyh.css';
import '../../css/e/e0fav9sta.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6ntrhbag"/><path class="d47zgac9l"/><path class="hjy07h-_o"/><path class="e1xt7abyh"/><path class="e0fav9sta"/>`,
		"fallback": "openmoji:boule-bread",
	});
}

export default Component;
