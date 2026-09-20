import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpvie97gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpvie97gu"/>`,
		"fallback": "simple-icons:dsautomobiles",
	});
}

export default Component;
