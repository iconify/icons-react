import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1cf-cbwa.css';
import '../../css/w/wflhrrs6l.css';
import '../../css/v/vfm78o92s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i1cf-cbwa"/><path class="wflhrrs6l"/><path class="vfm78o92s"/></g>`,
		"fallback": "glyphs:barcode-scan-bold",
	});
}

export default Component;
