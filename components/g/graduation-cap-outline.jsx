import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3lsmi_yp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3lsmi_yp"/>`,
		"fallback": "glyphs:graduation-cap-outline",
	});
}

export default Component;
