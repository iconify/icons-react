import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/twyn0k0jp.css';
import '../../css/z/zcmw_2b3p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="twyn0k0jp"/><path class="zcmw_2b3p"/></g>`,
		"fallback": "glyphs-poly:docs-1",
	});
}

export default Component;
