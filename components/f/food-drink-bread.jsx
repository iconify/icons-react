import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud_o9x3-n.css';
import '../../css/w/wbdo44kuk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud_o9x3-n"/><path class="wbdo44kuk"/>`,
		"fallback": "streamline-pixel:food-drink-bread",
	});
}

export default Component;
