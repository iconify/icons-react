import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts_mtbbcn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts_mtbbcn"/>`,
		"fallback": "si-glyph:arrow-right",
	});
}

export default Component;
