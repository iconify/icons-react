import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flpa9tb9r.css';

const viewBox = {"width":1664,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flpa9tb9r"/>`,
		"fallback": "fa:download",
	});
}

export default Component;
