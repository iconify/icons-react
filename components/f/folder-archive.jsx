import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs80xnbke.css';
import '../../css/y/ynyz-xbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="vs80xnbke"/><path class="ynyz-xbyo"/></g>`,
		"fallback": "lucide:folder-archive",
	});
}

export default Component;
