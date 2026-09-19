import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm4nkjbjo.css';
import '../../css/z/zyslw7y9y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm4nkjbjo"/><path class="zyslw7y9y"/></g>`,
		"fallback": "glyphs:arrows-cross-duo",
	});
}

export default Component;
