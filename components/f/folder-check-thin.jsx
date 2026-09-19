import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uowg2d21o.css';
import '../../css/v/v7yzkqojp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uowg2d21o"/><path class="v7yzkqojp"/></g>`,
		"fallback": "iconamoon:folder-check-thin",
	});
}

export default Component;
