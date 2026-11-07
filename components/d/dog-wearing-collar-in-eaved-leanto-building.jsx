import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqm6qeb7c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqm6qeb7c"/>`,
		"fallback": "pinhead:dog-wearing-collar-in-eaved-leanto-building",
	});
}

export default Component;
