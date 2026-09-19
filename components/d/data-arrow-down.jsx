import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcn1mjbjs.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcn1mjbjs"/>`,
		"fallback": "si-glyph:data-arrow-down",
	});
}

export default Component;
