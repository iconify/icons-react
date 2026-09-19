import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syc0r02fb.css';
import '../../css/i/idpfg-7ly.css';
import '../../css/g/goyq6_8eq.css';
import '../../css/i/iw56heams.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="syc0r02fb"/><path class="idpfg-7ly"/><path class="goyq6_8eq"/><path class="iw56heams"/></g>`,
		"fallback": "glyphs:envelope-open-duo",
	});
}

export default Component;
