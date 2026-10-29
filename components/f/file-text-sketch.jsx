import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/arsn4elex.css';
import '../../css/m/mbsaw5b_s.css';
import '../../css/a/ax6669bao.css';
import '../../css/l/lnhrmpy0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="arsn4elex"/><path class="mbsaw5b_s wm-a"/><path class="ax6669bao wm-k"/><path class="lnhrmpy0b wm-a"/></g>`,
		"fallback": "withicons:file-text-sketch",
	});
}

export default Component;
