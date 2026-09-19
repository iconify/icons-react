import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v01kf7p0c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v01kf7p0c"/>`,
		"fallback": "glyphs:align-items-side",
	});
}

export default Component;
