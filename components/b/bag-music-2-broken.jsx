import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vgdrhu2qc.css';
import '../../css/l/lurpk9itd.css';
import '../../css/v/vf7wzobiw.css';
import '../../css/y/ye5v0kb6s.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vgdrhu2qc"/><path class="lurpk9itd"/><circle class="vf7wzobiw"/><path class="ye5v0kb6s"/><path class="buo1kubox"/></g>`,
		"fallback": "solar:bag-music-2-broken",
	});
}

export default Component;
