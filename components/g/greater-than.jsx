import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il392qm0l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il392qm0l"/>`,
		"fallback": "fa7-solid:greater-than",
	});
}

export default Component;
