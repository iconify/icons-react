import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adlpn2bty.css';
import '../../css/t/thk-m3b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="adlpn2bty"/><path class="thk-m3b3i"/></g>`,
		"fallback": "reicon:briefcase4-duotone",
	});
}

export default Component;
