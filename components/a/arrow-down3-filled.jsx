import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak5-1l7_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak5-1l7_k"/>`,
		"fallback": "reicon:arrow-down3-filled",
	});
}

export default Component;
