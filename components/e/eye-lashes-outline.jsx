import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts2tgjjid.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts2tgjjid"/>`,
		"fallback": "glyphs:eye-lashes-outline",
	});
}

export default Component;
