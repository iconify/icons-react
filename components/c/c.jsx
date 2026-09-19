import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf9ugubvn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf9ugubvn"/>`,
		"fallback": "glyphs-poly:c",
	});
}

export default Component;
