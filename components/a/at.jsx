import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7ev_gi8u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7ev_gi8u"/>`,
		"fallback": "glyphs-poly:at",
	});
}

export default Component;
