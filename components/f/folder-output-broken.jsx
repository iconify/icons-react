import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i02wx60ix.css';
import '../../css/d/d0h1ndbsd.css';
import '../../css/r/rx259hx4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i02wx60ix"/><path class="d0h1ndbsd"/><path class="rx259hx4x"/></g>`,
		"fallback": "solar:folder-output-broken",
	});
}

export default Component;
