import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k74mtmcak.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k74mtmcak"/>`,
		"fallback": "glyphs:comment-remove",
	});
}

export default Component;
