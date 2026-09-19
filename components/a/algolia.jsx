import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5c_go20t.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5c_go20t"/>`,
		"fallback": "fa-brands:algolia",
	});
}

export default Component;
