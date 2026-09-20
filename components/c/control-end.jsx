import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqc0zky1o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqc0zky1o"/>`,
		"fallback": "simple-line-icons:control-end",
	});
}

export default Component;
