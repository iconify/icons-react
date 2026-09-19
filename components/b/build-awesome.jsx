import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na593-b-q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na593-b-q"/>`,
		"fallback": "fa7-brands:build-awesome",
	});
}

export default Component;
