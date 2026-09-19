import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a1phhubdt.css';
import '../../css/r/roilbdb6a.css';

const viewBox = {"width":80,"height":83};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a1phhubdt"/><path class="roilbdb6a"/></g>`,
		"fallback": "glyphs:arrow-solid-curve-double-bold",
	});
}

export default Component;
