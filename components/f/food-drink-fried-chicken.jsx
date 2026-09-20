import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zawatokrf.css';
import '../../css/l/lb8np0b7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zawatokrf"/><path class="lb8np0b7b"/>`,
		"fallback": "streamline-pixel:food-drink-fried-chicken",
	});
}

export default Component;
