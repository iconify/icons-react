import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c6_fd-brn.css';
import '../../css/i/in275_bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c6_fd-brn"/><path class="in275_bks"/></g>`,
		"fallback": "healthicons:egg-cell-24px",
	});
}

export default Component;
