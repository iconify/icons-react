import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcf6_w18s.css';
import '../../css/b/btt_r2bcj.css';
import '../../css/w/wr35f_b0v.css';
import '../../css/w/wz-xm5jiv.css';
import '../../css/s/sl7hd2bim.css';
import '../../css/d/d9z-87btf.css';
import '../../css/r/rz0zd9b0a.css';
import '../../css/w/wwf5bcyfc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcf6_w18s"/><path class="btt_r2bcj"/><path class="wr35f_b0v"/><path class="wz-xm5jiv"/><path class="sl7hd2bim"/><path class="d9z-87btf"/><path class="rz0zd9b0a"/><circle class="wwf5bcyfc"/>`,
		"fallback": "openmoji:football-figure-white",
	});
}

export default Component;
