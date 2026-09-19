import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chigjbbio.css';
import '../../css/o/ogr-x4b7p.css';
import '../../css/q/qvlwvom8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chigjbbio"/><path clip-rule="evenodd" class="ogr-x4b7p"/><path clip-rule="evenodd" class="qvlwvom8r"/></g>`,
		"fallback": "healthicons:contraceptive-voucher-outline",
	});
}

export default Component;
