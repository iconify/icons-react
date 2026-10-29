import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cgf36yvjm.css';
import '../../css/f/fr09pvb7p.css';
import '../../css/k/kr0s17gbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cgf36yvjm"/><path class="fr09pvb7p wm-k"/><path class="kr0s17gbf wm-a"/></g>`,
		"fallback": "withicons:file-lock-sketch",
	});
}

export default Component;
