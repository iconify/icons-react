import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya2h1ewyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya2h1ewyu"/>`,
		"fallback": "streamline-color:flash-2-flat",
	});
}

export default Component;
