import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/itdj3bbwx.css';
import '../../css/y/y3n3mvhpe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="itdj3bbwx"/><path class="y3n3mvhpe"/></g>`,
		"fallback": "glyphs:axe-bold",
	});
}

export default Component;
