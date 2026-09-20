import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bji8e2b5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bji8e2b5w"/>`,
		"fallback": "osmic:cemetery-14",
	});
}

export default Component;
