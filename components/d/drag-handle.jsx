import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xguvk2b9u.css';
import '../../css/u/u4i3hsbah.css';
import '../../css/q/qe66mdbpf.css';
import '../../css/n/np5c3ubxn.css';
import '../../css/r/rm3s91bss.css';
import '../../css/k/kbu3fm_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xguvk2b9u"/><path class="u4i3hsbah wm-k"/><path class="qe66mdbpf wm-k"/><path class="np5c3ubxn wm-k"/><path class="rm3s91bss wm-k"/><path class="kbu3fm_0o wm-shine"/>`,
		"fallback": "withicons-pastel:drag-handle",
	});
}

export default Component;
