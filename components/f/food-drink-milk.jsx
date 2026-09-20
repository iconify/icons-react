import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydt91b47t.css';
import '../../css/e/e2_9vofxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydt91b47t"/><path class="e2_9vofxw"/>`,
		"fallback": "streamline-pixel:food-drink-milk",
	});
}

export default Component;
