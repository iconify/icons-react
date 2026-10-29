import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a471k1qjf.css';
import '../../css/f/f2uc4dbbl.css';
import '../../css/v/v53283b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a471k1qjf"/><path class="f2uc4dbbl wm-shadow"/><path class="v53283b0r"/></g>`,
		"fallback": "withicons:activity-engrave",
	});
}

export default Component;
