import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx5km29gc.css';
import '../../css/u/ua3nsqb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx5km29gc"/><path class="ua3nsqb7g"/>`,
		"fallback": "tdesign:gesture-slide-left-and-right-filled",
	});
}

export default Component;
