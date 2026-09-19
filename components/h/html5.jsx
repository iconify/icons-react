import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-wjbbla.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to-wjbbla"/>`,
		"fallback": "foundation:html5",
	});
}

export default Component;
