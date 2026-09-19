import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-h9onb4y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-h9onb4y"/>`,
		"fallback": "icomoon-free:facebook",
	});
}

export default Component;
