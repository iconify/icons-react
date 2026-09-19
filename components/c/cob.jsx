import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blna_7e-c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blna_7e-c"/>`,
		"fallback": "cryptocurrency:cob",
	});
}

export default Component;
