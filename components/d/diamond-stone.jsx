import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob2rwxbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob2rwxbsw"/>`,
		"fallback": "mdi-light:diamond-stone",
	});
}

export default Component;
