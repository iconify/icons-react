import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d3u7sce2p.css';
import '../../css/z/zlr7xzbvq.css';
import '../../css/k/k1odkub2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d3u7sce2p"/><path class="zlr7xzbvq"/><path class="k1odkub2p"/></g>`,
		"fallback": "healthicons:domestic-worker",
	});
}

export default Component;
