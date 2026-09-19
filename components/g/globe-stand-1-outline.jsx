import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrh6ds5kw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrh6ds5kw"/>`,
		"fallback": "glyphs:globe-stand-1-outline",
	});
}

export default Component;
