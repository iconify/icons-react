import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktdy_3blv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktdy_3blv"/>`,
		"fallback": "glyphs:cloud-1-duo",
	});
}

export default Component;
