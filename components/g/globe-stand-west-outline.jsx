import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wynr2uy_o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wynr2uy_o"/>`,
		"fallback": "glyphs:globe-stand-west-outline",
	});
}

export default Component;
