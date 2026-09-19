import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw4dz4bkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw4dz4bkm"/>`,
		"fallback": "glyphs:align-center",
	});
}

export default Component;
