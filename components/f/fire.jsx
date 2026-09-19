import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfh02jbbq.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfh02jbbq"/>`,
		"fallback": "fa:fire",
	});
}

export default Component;
