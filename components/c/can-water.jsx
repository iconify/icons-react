import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze9mvuf9y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze9mvuf9y"/>`,
		"fallback": "si-glyph:can-water",
	});
}

export default Component;
