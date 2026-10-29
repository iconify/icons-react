import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jktrt1h6c.css';
import '../../css/m/mnmd8acsd.css';
import '../../css/a/a655nzbvw.css';
import '../../css/i/iqi2kk9_g.css';
import '../../css/l/lhdead8xm.css';
import '../../css/s/s9pyjpw8b.css';
import '../../css/v/vdrbhz4zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jktrt1h6c"/><path class="mnmd8acsd wm-k"/><path class="a655nzbvw wm-a"/><path class="iqi2kk9_g wm-s"/><path class="lhdead8xm wm-k"/><path class="s9pyjpw8b wm-a"/><path class="vdrbhz4zb wm-s"/></g>`,
		"fallback": "withicons:image-plus-sketch",
	});
}

export default Component;
