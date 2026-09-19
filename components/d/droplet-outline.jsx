import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmmp82b-o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kmmp82b-o"/>`,
		"fallback": "glyphs:droplet-outline",
	});
}

export default Component;
