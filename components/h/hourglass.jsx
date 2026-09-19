import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv0q8b-8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv0q8b-8f"/>`,
		"fallback": "ion:hourglass",
	});
}

export default Component;
