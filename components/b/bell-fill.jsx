import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbyuzub8k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbyuzub8k"/>`,
		"fallback": "f7:bell-fill",
	});
}

export default Component;
