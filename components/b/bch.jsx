import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0qvv3bek.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0qvv3bek"/>`,
		"fallback": "cryptocurrency:bch",
	});
}

export default Component;
