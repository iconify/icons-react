import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzf7mi7he.css';
import '../../css/h/hrlch2b6j.css';
import '../../css/z/zdrhem_xs.css';
import '../../css/r/ra0veia6x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xzf7mi7he"/><path clip-rule="evenodd" class="hrlch2b6j"/><path class="zdrhem_xs"/><path clip-rule="evenodd" class="ra0veia6x"/></g>`,
		"fallback": "glyphs:exposure-outline",
	});
}

export default Component;
