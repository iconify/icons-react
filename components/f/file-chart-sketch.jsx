import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rvnfwdfds.css';
import '../../css/s/scp0tkbbg.css';
import '../../css/d/dtbxyvb-n.css';
import '../../css/y/ynl6k533e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rvnfwdfds"/><path class="scp0tkbbg wm-a"/><path class="dtbxyvb-n wm-k"/><path class="wm-a ynl6k533e"/></g>`,
		"fallback": "withicons:file-chart-sketch",
	});
}

export default Component;
