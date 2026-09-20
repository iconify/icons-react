import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cljdfj5ex.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cljdfj5ex"/>`,
		"fallback": "pinhead:droplet-and-question-mark",
	});
}

export default Component;
