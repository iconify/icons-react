import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnd_t9byb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnd_t9byb"/>`,
		"fallback": "icons8:idea",
	});
}

export default Component;
