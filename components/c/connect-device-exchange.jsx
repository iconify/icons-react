import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xqg2inp0k.css';
import '../../css/e/es07ctbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xqg2inp0k"/><path class="es07ctbkb"/></g>`,
		"fallback": "streamline-freehand:connect-device-exchange",
	});
}

export default Component;
