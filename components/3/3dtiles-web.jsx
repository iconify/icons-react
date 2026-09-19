import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhi5oybze.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhi5oybze"/>`,
		"fallback": "gis:3dtiles-web",
	});
}

export default Component;
