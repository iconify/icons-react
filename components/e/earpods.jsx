import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq90vkbip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq90vkbip"/>`,
		"fallback": "streamline:earpods",
	});
}

export default Component;
