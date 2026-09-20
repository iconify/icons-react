import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pl2kf0_ch.css';
import '../../css/w/w65t7vpsn.css';
import '../../css/d/dos_yhbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pl2kf0_ch"/><circle class="w65t7vpsn"/><circle class="dos_yhbgg"/></g>`,
		"fallback": "lucide:git-branch-minus",
	});
}

export default Component;
