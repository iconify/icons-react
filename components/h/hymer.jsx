import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycdk8iqtb.css';

const viewBox = {"width":984.7,"height":175.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycdk8iqtb"/>`,
		"fallback": "thesvg-color:hymer",
	});
}

export default Component;
