import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ziim80_xf.css';
import '../../css/t/thly52bes.css';
import '../../css/t/t0ekv28ky.css';
import '../../css/u/un0m83cyx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ziim80_xf"/><rect class="thly52bes"/><rect class="t0ekv28ky"/><path class="un0m83cyx"/></g>`,
		"fallback": "glyphs-poly:credit-card-front",
	});
}

export default Component;
