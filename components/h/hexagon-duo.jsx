import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf368b6bh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf368b6bh"/>`,
		"fallback": "glyphs:hexagon-duo",
	});
}

export default Component;
