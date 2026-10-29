import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xmh_htx7j.css';
import '../../css/h/hq4feobms.css';
import '../../css/v/v6yy0cbrr.css';
import '../../css/a/alio6gcxk.css';
import '../../css/l/lfeqacy5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xmh_htx7j"/><path class="hq4feobms wm-shadow"/><path class="v6yy0cbrr wm-k"/><path class="alio6gcxk wm-a"/><path class="lfeqacy5l wm-k"/></g>`,
		"fallback": "withicons:avatar-monster-fluffy-engrave",
	});
}

export default Component;
