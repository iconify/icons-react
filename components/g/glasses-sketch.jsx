import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tm4gzzgqh.css';
import '../../css/b/bbdvx11fu.css';
import '../../css/c/cdn7lcb3n.css';
import '../../css/b/b1d8a7blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tm4gzzgqh wm-shine"/><path class="bbdvx11fu wm-k"/><path class="cdn7lcb3n wm-k"/><path class="b1d8a7blo wm-k"/></g>`,
		"fallback": "withicons:glasses-sketch",
	});
}

export default Component;
