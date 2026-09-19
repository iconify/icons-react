import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqwm87bxg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqwm87bxg"/>`,
		"fallback": "fa7-regular:image",
	});
}

export default Component;
