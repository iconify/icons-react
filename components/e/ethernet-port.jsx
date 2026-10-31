import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b852bgb5f.css';
import '../../css/g/g7bbuzehg.css';
import '../../css/s/s_m3fpstd.css';
import '../../css/g/gkz1pdpgm.css';
import '../../css/p/p8-cqy26s.css';
import '../../css/u/uwbervb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b852bgb5f wm-shadow"/><path class="g7bbuzehg"/><path class="s_m3fpstd"/><path class="gkz1pdpgm"/><path class="p8-cqy26s"/><path class="uwbervb6e"/></g>`,
		"fallback": "withicons-retro:ethernet-port",
	});
}

export default Component;
