import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tczeekb1d.css';
import '../../css/l/liu-dcbqj.css';
import '../../css/b/b1qb9xbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tczeekb1d"/><path clip-rule="evenodd" class="liu-dcbqj"/><path class="b1qb9xbgx"/></g>`,
		"fallback": "streamline-sharp-color:baggage-flat",
	});
}

export default Component;
