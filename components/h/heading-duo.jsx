import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4gc-vbgr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4gc-vbgr"/>`,
		"fallback": "glyphs:heading-duo",
	});
}

export default Component;
