import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/i08u7-pxf.css';
import '../../css/i/i2pmspbzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="i08u7-pxf"/><path class="i2pmspbzd"/></g>`,
		"fallback": "streamline-plump:file-report",
	});
}

export default Component;
