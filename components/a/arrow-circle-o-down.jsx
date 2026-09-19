import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-922rvxz.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1536) scale(1 -1)"><path class="b-922rvxz"/></g>`,
		"fallback": "fa:arrow-circle-o-down",
	});
}

export default Component;
