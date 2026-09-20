import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uki0vkbrr.css';
import '../../css/s/su9dknbed.css';
import '../../css/u/utr_d7_ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uki0vkbrr"/><path class="su9dknbed"/><path class="utr_d7_ko"/></g>`,
		"fallback": "stash:file-export-light",
	});
}

export default Component;
