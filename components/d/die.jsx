import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od1iqpboh.css';
import '../../css/k/k79q3xboj.css';
import '../../css/r/r5d2n_xgw.css';
import '../../css/w/w23d_qkzq.css';
import '../../css/z/zxhjaubkm.css';
import '../../css/g/gx7dd0bvf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od1iqpboh"/><circle class="k79q3xboj"/><circle class="r5d2n_xgw"/><circle class="w23d_qkzq"/><circle class="zxhjaubkm"/><circle class="gx7dd0bvf"/>`,
		"fallback": "ooui:die",
	});
}

export default Component;
