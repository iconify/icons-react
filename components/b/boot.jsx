import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqy0o8b5k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqy0o8b5k"/>`,
		"fallback": "picon:boot",
	});
}

export default Component;
