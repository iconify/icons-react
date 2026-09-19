import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meoi9rbek.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meoi9rbek"/>`,
		"fallback": "glyphs:hotel",
	});
}

export default Component;
