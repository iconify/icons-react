import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/ynv-2sbfg.css';
import '../../css/e/ekxi8wbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ynv-2sbfg"/><path class="ekxi8wbjw"/></g>`,
		"fallback": "streamline-sharp-color:delete-tag",
	});
}

export default Component;
