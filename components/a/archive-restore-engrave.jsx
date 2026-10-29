import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qt1qw-bap.css';
import '../../css/q/q511u5m8e.css';
import '../../css/k/k_lneb11t.css';
import '../../css/k/kfbj6uzww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qt1qw-bap wm-k"/><path class="q511u5m8e wm-shadow"/><path class="k_lneb11t wm-k"/><path class="kfbj6uzww wm-a"/></g>`,
		"fallback": "withicons:archive-restore-engrave",
	});
}

export default Component;
