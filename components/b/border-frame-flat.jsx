import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/e/eyjfuzkke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ss8bevb4j"/><path clip-rule="evenodd" class="eyjfuzkke"/></g>`,
		"fallback": "streamline-plump-color:border-frame-flat",
	});
}

export default Component;
