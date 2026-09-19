import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9vd2w9_c.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9vd2w9_c"/>`,
		"fallback": "fa:building",
	});
}

export default Component;
