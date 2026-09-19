import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6v241bcz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6v241bcz"/>`,
		"fallback": "f7:arrow-up-bin-fill",
	});
}

export default Component;
