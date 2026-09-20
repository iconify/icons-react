import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s2ph-vbgh.css';
import '../../css/q/qnb_nel_w.css';
import '../../css/h/hpb81aceh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s2ph-vbgh"/><path class="qnb_nel_w"/><path class="hpb81aceh"/></g>`,
		"fallback": "streamline-plump:customer-support-3",
	});
}

export default Component;
