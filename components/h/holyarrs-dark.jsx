import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duq8th5vt.css';
import '../../css/p/pmm60ql0f.css';
import '../../css/c/c-6-aeb7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duq8th5vt"/><path class="pmm60ql0f"/><path class="c-6-aeb7i"/>`,
		"fallback": "selfhst:holyarrs-dark",
	});
}

export default Component;
