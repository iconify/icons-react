import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j15n6abqe.css';
import '../../css/r/rfw_iebux.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j15n6abqe"/><path class="rfw_iebux"/></g>`,
		"fallback": "si-glyph:birthday-cake",
	});
}

export default Component;
