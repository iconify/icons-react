import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m7r8ebbdl.css';
import '../../css/m/mnjv0ybzu.css';
import '../../css/a/af53pzb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m7r8ebbdl"/><path class="mnjv0ybzu"/><path class="af53pzb1g"/></g>`,
		"fallback": "solar:align-top-linear",
	});
}

export default Component;
