import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9zur0vky.css';
import '../../css/t/tqgdst6it.css';
import '../../css/d/dyv50c1zz.css';
import '../../css/e/e08bxfbeb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9zur0vky"/><path class="tqgdst6it"/><circle class="dyv50c1zz"/><circle class="e08bxfbeb"/>`,
		"fallback": "openmoji:instagram",
	});
}

export default Component;
