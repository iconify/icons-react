import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjiknzb0g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjiknzb0g"/>`,
		"fallback": "simple-line-icons:envolope-letter",
	});
}

export default Component;
