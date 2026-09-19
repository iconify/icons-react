import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpn0tfite.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpn0tfite"/>`,
		"fallback": "fa:headphones",
	});
}

export default Component;
