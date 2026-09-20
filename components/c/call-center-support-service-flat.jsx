import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u67630dio.css';
import '../../css/w/wcduh8b5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u67630dio"/><path clip-rule="evenodd" class="wcduh8b5o"/></g>`,
		"fallback": "streamline-plump-color:call-center-support-service-flat",
	});
}

export default Component;
