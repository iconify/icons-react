import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/otia_qs9v.css';
import '../../css/d/dk36_qbfc.css';
import '../../css/y/yltf94bxm.css';
import '../../css/c/chfexdi1f.css';
import '../../css/d/drdv4ab-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="otia_qs9v wm-deco"/><path class="dk36_qbfc wm-deco"/><path class="wm-k yltf94bxm"/><path class="chfexdi1f wm-a"/><path class="drdv4ab-w wm-k"/></g>`,
		"fallback": "withicons:chevron-first-blueprint",
	});
}

export default Component;
