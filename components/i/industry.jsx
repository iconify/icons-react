import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh5c8rm5y.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh5c8rm5y"/>`,
		"fallback": "fa:industry",
	});
}

export default Component;
