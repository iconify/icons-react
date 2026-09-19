import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnnlgvb3p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnnlgvb3p"/>`,
		"fallback": "dinkie-icons:high-speed-train",
	});
}

export default Component;
