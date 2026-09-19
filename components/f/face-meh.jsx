import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i20o1k74r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i20o1k74r"/>`,
		"fallback": "fa7-solid:face-meh",
	});
}

export default Component;
