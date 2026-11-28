import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/q/qjj74mrlx.css';
import '../../css/c/c4420yblp.css';
import '../../css/t/tdpocnguc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="qjj74mrlx"/><path class="c4420yblp"/><path class="tdpocnguc"/></g>`,
		"fallback": "iconaut:circle-list-filter",
	});
}

export default Component;
