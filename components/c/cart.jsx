import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6srxhjli.css';

const viewBox = {"width":512,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6srxhjli"/>`,
		"fallback": "ps:cart",
	});
}

export default Component;
