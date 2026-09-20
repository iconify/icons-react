import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzri54b5g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzri54b5g"/>`,
		"fallback": "pinhead:bust-on-plinth",
	});
}

export default Component;
