import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v28e_eb_t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v28e_eb_t"/>`,
		"fallback": "fa7-solid:envelope-open",
	});
}

export default Component;
