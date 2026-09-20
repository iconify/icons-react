import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cquoizaco.css';
import '../../css/x/xtgd8w0jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cquoizaco"/><path class="xtgd8w0jx"/></g>`,
		"fallback": "streamline-sharp-color:airplane-disabled",
	});
}

export default Component;
