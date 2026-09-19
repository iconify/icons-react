import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irabnhb9e.css';
import '../../css/j/jiz5zbbbs.css';
import '../../css/e/edo2a4sfe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="irabnhb9e"/><path class="jiz5zbbbs"/><path class="edo2a4sfe"/></g>`,
		"fallback": "glyphs:cloudy-duo",
	});
}

export default Component;
