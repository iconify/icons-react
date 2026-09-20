import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/u/uzhw_xbgj.css';
import '../../css/d/dq6w8ccul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="uzhw_xbgj"/><path class="dq6w8ccul"/></g>`,
		"fallback": "tabler:database-cog",
	});
}

export default Component;
