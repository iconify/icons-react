import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj8wlmhgm.css';
import '../../css/x/xpk_g7bnh.css';
import '../../css/w/wgy-zbb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj8wlmhgm"/><path class="xpk_g7bnh"/><path class="wgy-zbb8d"/>`,
		"fallback": "gcp:dataprep",
	});
}

export default Component;
