import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dcs14gb4n.css';
import '../../css/i/idfvs04zd.css';
import '../../css/i/izsxrmtpy.css';
import '../../css/k/k5_ti6n7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dcs14gb4n wm-k"/><path class="idfvs04zd wm-a"/><path class="izsxrmtpy wm-k"/><path class="k5_ti6n7q wm-a"/></g>`,
		"fallback": "withicons:arrow-up-from-line-sketch",
	});
}

export default Component;
