import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lh23q0bub.css';
import '../../css/f/fihxnqbec.css';
import '../../css/q/qy154lb5h.css';
import '../../css/s/sil1qubyf.css';
import '../../css/k/ks2n1wboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lh23q0bub"/><path class="fihxnqbec wm-k"/><path class="qy154lb5h wm-a"/><path class="sil1qubyf wm-k"/><path class="ks2n1wboh wm-a"/></g>`,
		"fallback": "withicons:butterfly-sketch",
	});
}

export default Component;
