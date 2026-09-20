import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je2910b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je2910b4y"/>`,
		"fallback": "octicon:columns-24",
	});
}

export default Component;
