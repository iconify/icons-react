import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av9yo2bgk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="av9yo2bgk"/>`,
		"fallback": "glyphs:box-close-outline",
	});
}

export default Component;
