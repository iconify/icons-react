import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6z0wd76j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6z0wd76j"/>`,
		"fallback": "glyphs:chart-bar-1-outline",
	});
}

export default Component;
