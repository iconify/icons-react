import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv3kr87mm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv3kr87mm"/>`,
		"fallback": "glyphs:barcode",
	});
}

export default Component;
