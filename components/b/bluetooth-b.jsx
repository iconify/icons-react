import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qto7n0ozo.css';

const viewBox = {"width":960,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qto7n0ozo"/>`,
		"fallback": "fa:bluetooth-b",
	});
}

export default Component;
