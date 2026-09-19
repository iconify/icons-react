import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vihlqctim.css';
import '../../css/n/n_mwznbih.css';
import '../../css/o/oh3b46blr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vihlqctim"/><path clip-rule="evenodd" class="n_mwznbih"/><path class="oh3b46blr"/></g>`,
		"fallback": "glyphs:crosshairs-bold",
	});
}

export default Component;
