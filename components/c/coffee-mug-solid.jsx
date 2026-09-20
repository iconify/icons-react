import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf1_53b8o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hf1_53b8o"/>`,
		"fallback": "streamline:coffee-mug-solid",
	});
}

export default Component;
