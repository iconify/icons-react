import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlubp1u1f.css';

const viewBox = {"width":448,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlubp1u1f"/>`,
		"fallback": "fa:exclamation",
	});
}

export default Component;
