import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v-qredccz.css';
import '../../css/w/w65t7vpsn.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/k/khe-2xbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v-qredccz"/><circle class="w65t7vpsn"/><circle class="dos_yhbgg"/><path class="khe-2xbbf"/></g>`,
		"fallback": "feather:git-branch",
	});
}

export default Component;
