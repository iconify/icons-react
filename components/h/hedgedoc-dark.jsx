import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i08sjibyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i08sjibyg"/>`,
		"fallback": "selfhst:hedgedoc-dark",
	});
}

export default Component;
