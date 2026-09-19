import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwemtzb2x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwemtzb2x"/>`,
		"fallback": "glyphs:a-bold",
	});
}

export default Component;
