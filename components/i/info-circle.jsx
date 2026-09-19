import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvs_6lz2b.css';
import '../../css/z/z-u_4v9zs.css';
import '../../css/f/ftcbseb_g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvs_6lz2b"/><path class="z-u_4v9zs"/><path class="ftcbseb_g"/></g>`,
		"fallback": "glyphs-poly:info-circle",
	});
}

export default Component;
