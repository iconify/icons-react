import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t853eveaa.css';
import '../../css/r/r99fl0zcf.css';
import '../../css/u/uu81h1elk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t853eveaa"/><path class="r99fl0zcf"/><path class="uu81h1elk"/></g>`,
		"fallback": "lucide-extended:folder-network-duotone",
	});
}

export default Component;
