import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5gf3tbku.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5gf3tbku"/>`,
		"fallback": "ep:arrow-up-bold",
	});
}

export default Component;
