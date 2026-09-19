import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdl_kk0km.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdl_kk0km"/>`,
		"fallback": "glyphs:arrow-line-end",
	});
}

export default Component;
