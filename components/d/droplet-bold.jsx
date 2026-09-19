import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3t59pb3m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3t59pb3m"/>`,
		"fallback": "glyphs:droplet-bold",
	});
}

export default Component;
