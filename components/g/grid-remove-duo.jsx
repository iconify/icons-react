import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbg5d4pwg.css';
import '../../css/v/v6ajfqbvu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sbg5d4pwg"/><path class="v6ajfqbvu"/></g>`,
		"fallback": "glyphs:grid-remove-duo",
	});
}

export default Component;
