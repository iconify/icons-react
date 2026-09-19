import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgn7hvb-h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgn7hvb-h"/>`,
		"fallback": "glyphs:droplet-duo",
	});
}

export default Component;
