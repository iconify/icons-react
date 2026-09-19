import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axa7ce5ug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axa7ce5ug"/>`,
		"fallback": "bytesize:forwards",
	});
}

export default Component;
