import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4y305v-b.css';
import '../../css/x/xmexn7rih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4y305v-b"/><path class="xmexn7rih"/></g>`,
		"fallback": "tdesign:delete",
	});
}

export default Component;
