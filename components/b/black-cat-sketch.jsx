import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/imt6p7xdh.css';
import '../../css/a/awlg82ble.css';
import '../../css/c/ck8qjh1op.css';
import '../../css/g/gq0ay1izs.css';
import '../../css/r/rjvsqxvmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="imt6p7xdh wm-k"/><path class="awlg82ble wm-k"/><path class="ck8qjh1op wm-a"/><path class="gq0ay1izs wm-s"/><path class="rjvsqxvmf wm-s"/></g>`,
		"fallback": "withicons:black-cat-sketch",
	});
}

export default Component;
