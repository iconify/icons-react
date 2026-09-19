import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziptyqb_r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziptyqb_r"/>`,
		"fallback": "glyphs:docs-duo",
	});
}

export default Component;
