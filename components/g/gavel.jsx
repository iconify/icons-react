import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h1v6j8bkm.css';
import '../../css/f/ffxp8p6ff.css';
import '../../css/g/ghy-sebuh.css';
import '../../css/a/aydzuvbkz.css';
import '../../css/k/kjyj4ubca.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="h1v6j8bkm"/><path class="ffxp8p6ff wm-shine"/><path class="ghy-sebuh wm-k"/><path class="aydzuvbkz wm-a"/><path class="kjyj4ubca wm-s"/><path class="wm-deco wo89xnbgv"/></g>`,
		"fallback": "withicons-kawaii:gavel",
	});
}

export default Component;
