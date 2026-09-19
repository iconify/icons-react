import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uer6x4btr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uer6x4btr"/>`,
		"fallback": "ion:extension-puzzle",
	});
}

export default Component;
