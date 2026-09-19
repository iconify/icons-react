import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7i1dpmbw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7i1dpmbw"/>`,
		"fallback": "glyphs:hand-holding-bold",
	});
}

export default Component;
