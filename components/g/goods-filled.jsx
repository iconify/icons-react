import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb29voh_t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb29voh_t"/>`,
		"fallback": "ep:goods-filled",
	});
}

export default Component;
