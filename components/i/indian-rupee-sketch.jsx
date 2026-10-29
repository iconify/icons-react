import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u0n9xkgqk.css';
import '../../css/d/d8c09qbrh.css';
import '../../css/l/lkdo9zh9h.css';
import '../../css/v/vsxkjg2br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u0n9xkgqk wm-k"/><path class="d8c09qbrh wm-a"/><path class="lkdo9zh9h wm-k"/><path class="vsxkjg2br wm-a"/></g>`,
		"fallback": "withicons:indian-rupee-sketch",
	});
}

export default Component;
