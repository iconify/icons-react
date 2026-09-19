import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-asay8ov.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-asay8ov"/>`,
		"fallback": "glyphs:barcode-scan",
	});
}

export default Component;
