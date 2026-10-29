import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qz-wqrb_o.css';
import '../../css/b/bo8a-d58q.css';
import '../../css/o/ofugmqbjy.css';
import '../../css/l/l2g7ifo6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qz-wqrb_o wm-k"/><path class="bo8a-d58q wm-a"/><path class="ofugmqbjy wm-k"/><path class="l2g7ifo6y wm-a"/></g>`,
		"fallback": "withicons:corner-down-right-sketch",
	});
}

export default Component;
