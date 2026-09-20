import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epi81h6gk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epi81h6gk"/>`,
		"fallback": "ix:coffee",
	});
}

export default Component;
