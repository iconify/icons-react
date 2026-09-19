import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikp4nxbsw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ikp4nxbsw"/>`,
		"fallback": "glyphs:hand-spread-bold",
	});
}

export default Component;
