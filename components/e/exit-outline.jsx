import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxw75molp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxw75molp"/>`,
		"fallback": "ion:exit-outline",
	});
}

export default Component;
