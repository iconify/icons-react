import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0xlz4b6u.css';
import '../../css/o/ouodc29oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0xlz4b6u"/><path clip-rule="evenodd" class="ouodc29oh"/></g>`,
		"fallback": "streamline-sharp-color:inbox-flat",
	});
}

export default Component;
