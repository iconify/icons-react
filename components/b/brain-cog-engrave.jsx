import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sasjgvbej.css';
import '../../css/c/cb8204bna.css';
import '../../css/s/s8f-ewbkh.css';
import '../../css/l/lvwj8zv0y.css';
import '../../css/d/d-c_quigx.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sasjgvbej wm-k"/><path class="cb8204bna wm-s"/><path class="s8f-ewbkh wm-shadow"/><path class="lvwj8zv0y wm-k"/><path class="d-c_quigx wm-a"/><path class="ekmlpmtjg wm-s"/></g>`,
		"fallback": "withicons:brain-cog-engrave",
	});
}

export default Component;
