import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/erjirrx5w.css';
import '../../css/x/xm21k3byr.css';
import '../../css/b/baoogbiqr.css';
import '../../css/r/r_jalhe5w.css';
import '../../css/r/rfgozqboo.css';
import '../../css/o/ollpn-_wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="erjirrx5w"/><path class="xm21k3byr"/><path class="baoogbiqr"/><path class="r_jalhe5w"/><path class="rfgozqboo"/><path class="ollpn-_wg"/></g>`,
		"fallback": "withicons-bauhaus:avatar-person-headphones",
	});
}

export default Component;
