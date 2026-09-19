import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zc8428b1g.css';
import '../../css/g/gni434ykg.css';
import '../../css/p/pgea1lsuj.css';
import '../../css/a/a4c82-36o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zc8428b1g"/><path class="gni434ykg"/><rect transform="rotate(-45 28.027 34.009)" class="pgea1lsuj"/><rect transform="rotate(-45 41.976 47.958)" class="a4c82-36o"/></g>`,
		"fallback": "glyphs-poly:discount",
	});
}

export default Component;
