import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ls7obax.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ls7obax"/>`,
		"fallback": "glyphs:hand-spread-duo",
	});
}

export default Component;
