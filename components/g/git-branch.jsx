import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ioeul3y3v.css';
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
		"content": `<g class="nrj6p8qat"><path class="ioeul3y3v"/><circle class="w65t7vpsn"/><circle class="dos_yhbgg"/></g>`,
		"fallback": "lucide:git-branch",
	});
}

export default Component;
