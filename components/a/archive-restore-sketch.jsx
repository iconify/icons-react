import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sebac8bfa.css';
import '../../css/p/pgjsmy3yc.css';
import '../../css/q/qfzblfw3y.css';
import '../../css/i/i_e0aq0rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sebac8bfa"/><path class="pgjsmy3yc wm-a"/><path class="qfzblfw3y wm-k"/><path class="i_e0aq0rj wm-a"/></g>`,
		"fallback": "withicons:archive-restore-sketch",
	});
}

export default Component;
