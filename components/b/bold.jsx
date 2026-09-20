import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umlnqi5-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umlnqi5-a"/>`,
		"fallback": "pajamas:bold",
	});
}

export default Component;
