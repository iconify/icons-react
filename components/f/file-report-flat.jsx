import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i--f8_buj.css';
import '../../css/z/zxwt7gbmc.css';
import '../../css/p/p6cyscz9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i--f8_buj"/><path clip-rule="evenodd" class="zxwt7gbmc"/><path class="p6cyscz9g"/></g>`,
		"fallback": "streamline-plump-color:file-report-flat",
	});
}

export default Component;
