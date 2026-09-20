import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5db48gif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5db48gif"/>`,
		"fallback": "selfhst:inoreader-light",
	});
}

export default Component;
