import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xuun7cc7c.css';
import '../../css/s/s1om_jb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xuun7cc7c"/><path class="s1om_jb6x"/></g>`,
		"fallback": "streamline-sharp-color:add-pdf",
	});
}

export default Component;
