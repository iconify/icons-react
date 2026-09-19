import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4wf3lb-j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a4wf3lb-j"/>`,
		"fallback": "glyphs:border-style-outline",
	});
}

export default Component;
