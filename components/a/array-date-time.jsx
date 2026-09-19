import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al03c2bxc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al03c2bxc"/>`,
		"fallback": "carbon:array-date-time",
	});
}

export default Component;
