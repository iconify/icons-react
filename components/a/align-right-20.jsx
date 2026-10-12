import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-nf9pbgj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-nf9pbgj"/>`,
		"fallback": "garden:align-right-20",
	});
}

export default Component;
