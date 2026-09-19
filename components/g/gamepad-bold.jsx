import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iny_z7-rt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iny_z7-rt"/>`,
		"fallback": "glyphs:gamepad-bold",
	});
}

export default Component;
