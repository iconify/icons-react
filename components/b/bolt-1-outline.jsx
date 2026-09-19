import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/athg_qphj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="athg_qphj"/>`,
		"fallback": "glyphs:bolt-1-outline",
	});
}

export default Component;
