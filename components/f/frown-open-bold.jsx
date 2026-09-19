import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqipt_dmz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jqipt_dmz"/>`,
		"fallback": "glyphs:frown-open-bold",
	});
}

export default Component;
