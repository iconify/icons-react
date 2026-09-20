import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1h1vs9it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1h1vs9it"/>`,
		"fallback": "token:immutable",
	});
}

export default Component;
