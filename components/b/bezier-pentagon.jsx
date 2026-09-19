import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqa3f49xb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqa3f49xb"/>`,
		"fallback": "glyphs:bezier-pentagon",
	});
}

export default Component;
