import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fasq0wm8t.css';
import '../../css/j/jpz9rlb5y.css';
import '../../css/v/vpq_gac4t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fasq0wm8t"/><path class="jpz9rlb5y"/><path class="vpq_gac4t"/>`,
		"fallback": "thesvg-color:flaresolverr",
	});
}

export default Component;
