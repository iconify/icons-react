import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfs30bgfh.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fh1mgzuzo.css';
import '../../css/s/s2p8flb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xfs30bgfh"/><g class="xtpeb-edw"><path class="fh1mgzuzo"/><path class="s2p8flb5p"/></g>`,
		"fallback": "solar:forward-bold-duotone",
	});
}

export default Component;
