import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk352rb0i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk352rb0i"/>`,
		"fallback": "glyphs:box-bold",
	});
}

export default Component;
