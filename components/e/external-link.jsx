import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pq1dtpbtf.css';
import '../../css/y/y9chd9b9w.css';
import '../../css/v/vanl12bnz.css';
import '../../css/t/tq-zmyb_h.css';
import '../../css/n/npjeylbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pq1dtpbtf"/><path class="wm-shine y9chd9b9w"/><path class="vanl12bnz wm-k"/><path class="tq-zmyb_h wm-a"/><path class="npjeylbea wm-deco"/></g>`,
		"fallback": "withicons-kawaii:external-link",
	});
}

export default Component;
