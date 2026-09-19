import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb6yle7hb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb6yle7hb"/>`,
		"fallback": "fa7-solid:face-grin-wide",
	});
}

export default Component;
