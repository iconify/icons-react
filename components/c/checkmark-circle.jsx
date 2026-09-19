import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxzl7z52l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxzl7z52l"/>`,
		"fallback": "ion:checkmark-circle",
	});
}

export default Component;
