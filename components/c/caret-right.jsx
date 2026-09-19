import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp3yqspdz.css';

const viewBox = {"width":576,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(576 0) scale(-1 1)"><path class="fp3yqspdz"/></g>`,
		"fallback": "fa:caret-right",
	});
}

export default Component;
