import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iei8tsbpi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iei8tsbpi"/>`,
		"fallback": "glyphs:font-bold",
	});
}

export default Component;
