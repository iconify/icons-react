import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ov0kbmosh.css';
import '../../css/z/zqpa_ob9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ov0kbmosh"/><path class="zqpa_ob9q"/></g>`,
		"fallback": "icon-park-outline:folder-minus",
	});
}

export default Component;
