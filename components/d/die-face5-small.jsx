import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n84ghzllw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n84ghzllw"/>`,
		"fallback": "dinkie-icons:die-face5-small",
	});
}

export default Component;
