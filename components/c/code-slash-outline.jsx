import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfj0fgbcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfj0fgbcy"/>`,
		"fallback": "ion:code-slash-outline",
	});
}

export default Component;
