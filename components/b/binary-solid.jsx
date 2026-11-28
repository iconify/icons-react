import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtwqv5btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtwqv5btz"/>`,
		"fallback": "iconaut:binary-solid",
	});
}

export default Component;
