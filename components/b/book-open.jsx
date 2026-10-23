import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kqt9nuyfv.css';
import '../../css/z/zyg6ndb6d.css';
import '../../css/i/iuvff4jod.css';
import '../../css/r/rk2nneboe.css';
import '../../css/y/yfle5p2pj.css';
import '../../css/d/d30tuk0bs.css';
import '../../css/t/tes_ap3ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kqt9nuyfv"/><path class="zyg6ndb6d"/><path class="iuvff4jod"/><path class="rk2nneboe"/><path class="yfle5p2pj"/><path class="d30tuk0bs"/><path class="tes_ap3ev"/></g>`,
		"fallback": "matita:book-open",
	});
}

export default Component;
