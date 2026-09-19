import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovj65uyrr.css';
import '../../css/z/z-i-v5b9z.css';
import '../../css/c/ck3l_yb1f.css';
import '../../css/d/dz0vutsnd.css';
import '../../css/h/hs_ytft2u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ovj65uyrr"/><path class="z-i-v5b9z"/><path class="ck3l_yb1f"/><path class="dz0vutsnd"/><path class="hs_ytft2u"/></g>`,
		"fallback": "fluent-emoji-flat:ferris-wheel",
	});
}

export default Component;
