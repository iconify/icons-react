import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaaad0bbn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaaad0bbn"/>`,
		"fallback": "si-glyph:cubic",
	});
}

export default Component;
