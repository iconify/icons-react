import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujsl2ac1k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ujsl2ac1k"/>`,
		"fallback": "glyphs:ambulance-outline",
	});
}

export default Component;
