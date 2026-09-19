import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/guzwx1kky.css';
import '../../css/h/hpts6qnpj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="guzwx1kky"/><path class="hpts6qnpj"/></g>`,
		"fallback": "glyphs:door-open-bold",
	});
}

export default Component;
