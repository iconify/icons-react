import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yhos5ubjh.css';
import '../../css/g/gg7k0m7bl.css';
import '../../css/t/ti3m8jkqo.css';
import '../../css/x/xstlfobii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yhos5ubjh"/><path class="gg7k0m7bl wm-a"/><path class="ti3m8jkqo wm-k"/><path class="wm-a xstlfobii"/></g>`,
		"fallback": "withicons:arrow-right-to-line-sketch",
	});
}

export default Component;
