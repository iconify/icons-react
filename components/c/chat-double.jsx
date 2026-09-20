import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbpd03b3q.css';
import '../../css/p/ptdmcqm6k.css';
import '../../css/u/u0gevvf-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbpd03b3q"/><path class="ptdmcqm6k"/><path class="u0gevvf-k"/></g>`,
		"fallback": "tdesign:chat-double",
	});
}

export default Component;
