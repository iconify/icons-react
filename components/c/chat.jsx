import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-_jky8q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-_jky8q"/>`,
		"fallback": "picon:chat",
	});
}

export default Component;
