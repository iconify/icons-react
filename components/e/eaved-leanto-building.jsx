import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovkc52r5p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovkc52r5p"/>`,
		"fallback": "pinhead:eaved-leanto-building",
	});
}

export default Component;
