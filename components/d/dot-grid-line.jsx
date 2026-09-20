import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg7duf-dx.css';
import '../../css/j/j1uuoibsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg7duf-dx"/><path class="j1uuoibsg"/>`,
		"fallback": "mingcute:dot-grid-line",
	});
}

export default Component;
