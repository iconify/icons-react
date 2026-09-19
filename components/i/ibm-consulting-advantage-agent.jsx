import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bla2ybb5q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bla2ybb5q"/>`,
		"fallback": "carbon:ibm-consulting-advantage-agent",
	});
}

export default Component;
