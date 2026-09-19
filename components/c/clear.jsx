import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n24zlup5f.css';
import '../../css/x/xqg4v6-go.css';
import '../../css/x/xbne_mbps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="n24zlup5f"/><path class="xqg4v6-go"/><path class="xbne_mbps"/></g>`,
		"fallback": "icon-park-outline:clear",
	});
}

export default Component;
