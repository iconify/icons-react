import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okmoa9bvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="okmoa9bvv"/>`,
		"fallback": "glyphs:cross-outline",
	});
}

export default Component;
