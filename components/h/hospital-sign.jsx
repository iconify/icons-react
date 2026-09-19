import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn80c9n7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn80c9n7f"/>`,
		"fallback": "glyphs:hospital-sign",
	});
}

export default Component;
