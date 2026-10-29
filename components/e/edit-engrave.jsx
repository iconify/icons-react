import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ot024pb1q.css';
import '../../css/g/ga7q7_b2h.css';
import '../../css/a/a95tfx5hl.css';
import '../../css/v/vyfqjvtfg.css';
import '../../css/j/jefzkbbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ot024pb1q wm-k"/><path class="ga7q7_b2h wm-a"/><path class="a95tfx5hl wm-shadow"/><path class="vyfqjvtfg wm-k"/><path class="jefzkbbic wm-a"/></g>`,
		"fallback": "withicons:edit-engrave",
	});
}

export default Component;
