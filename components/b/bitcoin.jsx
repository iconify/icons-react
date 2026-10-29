import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/klmztbcdf.css';
import '../../css/u/ulk-ont8c.css';
import '../../css/w/w0e3fyibl.css';
import '../../css/c/ck6zxb4st.css';
import '../../css/v/vt39el7kg.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="klmztbcdf wm-shadow"/><path class="ulk-ont8c"/><path class="w0e3fyibl"/><path class="ck6zxb4st"/><path class="vt39el7kg wm-shine"/><path class="wm-deco xa5pkknmk"/></g>`,
		"fallback": "withicons-sticker:bitcoin",
	});
}

export default Component;
