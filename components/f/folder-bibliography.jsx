import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8ina5buu.css';
import '../../css/v/vd_tticyc.css';
import '../../css/o/od1fa3bni.css';
import '../../css/q/q9xl2bcmj.css';
import '../../css/p/p_17umbao.css';
import '../../css/z/zrnm0kb8c.css';
import '../../css/k/kyjwkubgu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8ina5buu"/><path class="vd_tticyc"/><path class="od1fa3bni"/><path class="q9xl2bcmj"/><path class="p_17umbao"/><path class="zrnm0kb8c"/><path class="kyjwkubgu"/>`,
		"fallback": "material-icon-theme:folder-bibliography",
	});
}

export default Component;
