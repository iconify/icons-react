import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rxrq2dbzm.css';
import '../../css/c/cuu4u-hgm.css';
import '../../css/w/wdn9m_beo.css';
import '../../css/u/ux1uh-02v.css';
import '../../css/m/mip4_abrl.css';
import '../../css/d/d5tl-zbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rxrq2dbzm"/><path class="cuu4u-hgm wm-k"/><path class="wdn9m_beo wm-s"/><path class="ux1uh-02v wm-k"/><path class="mip4_abrl wm-a"/><path class="d5tl-zbhg wm-s"/></g>`,
		"fallback": "withicons:file-pen-sketch",
	});
}

export default Component;
