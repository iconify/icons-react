import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq8q-ltfu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq8q-ltfu"/>`,
		"fallback": "glyphs:code-1-duo",
	});
}

export default Component;
