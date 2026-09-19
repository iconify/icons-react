import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vva03ib8r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vva03ib8r"/>`,
		"fallback": "glyphs:door",
	});
}

export default Component;
