import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4lnlsbhw.css';
import '../../css/g/gpuj0bcwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4lnlsbhw"/><path class="gpuj0bcwy"/></g>`,
		"fallback": "reicon:file-download-duotone",
	});
}

export default Component;
