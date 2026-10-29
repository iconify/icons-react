import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7orkhbbo.css';
import '../../css/j/j96vk5o1p.css';
import '../../css/q/qkgcggwyv.css';
import '../../css/u/u1qgtlh6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n7orkhbbo"/><path class="j96vk5o1p wm-a"/><path class="qkgcggwyv wm-k"/><path class="u1qgtlh6g wm-a"/></g>`,
		"fallback": "withicons:bell-sketch",
	});
}

export default Component;
