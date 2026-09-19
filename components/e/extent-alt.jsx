import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4__6lb7l.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4__6lb7l"/>`,
		"fallback": "gis:extent-alt",
	});
}

export default Component;
