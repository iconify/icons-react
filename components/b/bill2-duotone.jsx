import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibhpxzb1a.css';
import '../../css/l/li59jccuh.css';
import '../../css/o/ozff5bcpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ibhpxzb1a"/><path class="li59jccuh"/><path clip-rule="evenodd" class="ozff5bcpp"/></g>`,
		"fallback": "reicon:bill2-duotone",
	});
}

export default Component;
