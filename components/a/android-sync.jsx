import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht297tb1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht297tb1k"/>`,
		"fallback": "ion:android-sync",
	});
}

export default Component;
