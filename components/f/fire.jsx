import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q93rtebqc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q93rtebqc"/>`,
		"fallback": "glyphs:fire",
	});
}

export default Component;
