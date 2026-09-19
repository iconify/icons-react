import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycf2ujzsr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycf2ujzsr"/>`,
		"fallback": "glyphs:hand-call-duo",
	});
}

export default Component;
