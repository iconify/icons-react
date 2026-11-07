import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2zl0cc2f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2zl0cc2f"/>`,
		"fallback": "pinhead:eaved-leanto-shelter-with-floor",
	});
}

export default Component;
