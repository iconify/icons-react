import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwntxgpss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwntxgpss"/>`,
		"fallback": "mynaui:euro-diamond-solid",
	});
}

export default Component;
