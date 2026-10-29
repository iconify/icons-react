import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b756_yb4s.css';
import '../../css/q/qwt8_j5kl.css';
import '../../css/r/r44659vzv.css';
import '../../css/q/q30ivpb-j.css';
import '../../css/d/d4sz7suou.css';
import '../../css/r/rprisid_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b756_yb4s wm-shadow"/><path class="qwt8_j5kl wm-k"/><path class="r44659vzv wm-k"/><path class="q30ivpb-j wm-k"/><path class="d4sz7suou wm-k"/><path class="rprisid_l wm-shine"/>`,
		"fallback": "withicons-pastel:activity",
	});
}

export default Component;
