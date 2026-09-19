import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijsei2bsi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijsei2bsi"/>`,
		"fallback": "glyphs:bezier-triangle",
	});
}

export default Component;
