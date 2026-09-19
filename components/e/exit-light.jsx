import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zavdn0vkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zavdn0vkv"/>`,
		"fallback": "iconamoon:exit-light",
	});
}

export default Component;
