import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v10irub5c.css';
import '../../css/f/fnx_w819g.css';
import '../../css/y/yjucvx-nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="v10irub5c"/><path class="fnx_w819g"/><path class="yjucvx-nl"/></g>`,
		"fallback": "streamline-sharp-color:division-circle",
	});
}

export default Component;
