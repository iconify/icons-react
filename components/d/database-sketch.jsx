import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p8k8z9eib.css';
import '../../css/i/ie52vmbhx.css';
import '../../css/t/t7rl4acgf.css';
import '../../css/n/n7avn2bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p8k8z9eib"/><path class="ie52vmbhx wm-a"/><path class="t7rl4acgf wm-k"/><path class="n7avn2bad wm-a"/></g>`,
		"fallback": "withicons:database-sketch",
	});
}

export default Component;
