import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2y9x-b3c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2y9x-b3c"/>`,
		"fallback": "pinhead:eaved-open-pitched-building-with-double-z-door",
	});
}

export default Component;
