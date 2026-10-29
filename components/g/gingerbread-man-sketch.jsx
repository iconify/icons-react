import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b8zzbjxry.css';
import '../../css/c/ctoqrim0y.css';
import '../../css/b/b6y3-b38x.css';
import '../../css/p/pwxk_ckbd.css';
import '../../css/q/qpv4d6b-c.css';
import '../../css/m/mlvf2fajh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b8zzbjxry"/><path class="ctoqrim0y wm-k"/><path class="b6y3-b38x wm-k"/><path class="pwxk_ckbd wm-k"/><path class="qpv4d6b-c wm-k"/><path class="mlvf2fajh wm-a"/></g>`,
		"fallback": "withicons:gingerbread-man-sketch",
	});
}

export default Component;
