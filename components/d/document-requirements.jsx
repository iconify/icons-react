import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dybeleg8o.css';
import '../../css/l/lxih1s-hl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dybeleg8o"/><path class="lxih1s-hl"/>`,
		"fallback": "carbon:document-requirements",
	});
}

export default Component;
