import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf_n_km6a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf_n_km6a"/>`,
		"fallback": "ep:collection-tag",
	});
}

export default Component;
