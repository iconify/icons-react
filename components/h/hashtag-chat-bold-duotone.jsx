import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xif453wco.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kr91vbc_r.css';
import '../../css/m/m5v2b9dxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xif453wco"/><g class="xtpeb-edw"><path class="kr91vbc_r"/><path class="m5v2b9dxe"/></g>`,
		"fallback": "solar:hashtag-chat-bold-duotone",
	});
}

export default Component;
