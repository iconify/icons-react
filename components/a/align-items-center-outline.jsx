import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbmu9zd0n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gbmu9zd0n"/>`,
		"fallback": "glyphs:align-items-center-outline",
	});
}

export default Component;
