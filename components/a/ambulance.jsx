import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m_k-ybbbi.css';
import '../../css/y/y3not47io.css';
import '../../css/d/dkqenlbxo.css';
import '../../css/r/rsct1ib4g.css';
import '../../css/i/i4ed37b0o.css';
import '../../css/h/hygmayb9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="m_k-ybbbi"/><path class="y3not47io"/><path class="dkqenlbxo"/><path class="rsct1ib4g"/><circle class="i4ed37b0o"/><circle class="hygmayb9h"/></g>`,
		"fallback": "icon-park:ambulance",
	});
}

export default Component;
