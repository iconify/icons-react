import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs5y83bnd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs5y83bnd"/>`,
		"fallback": "glyphs:basket",
	});
}

export default Component;
