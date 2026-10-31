import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yawaon_6c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yawaon_6c"/>`,
		"fallback": "pinhead:eaved-open-gabled-building-with-door",
	});
}

export default Component;
