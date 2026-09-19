import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47w35-sy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47w35-sy"/>`,
		"fallback": "si-glyph:fire-hydrant",
	});
}

export default Component;
