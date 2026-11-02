import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prlh_wbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prlh_wbrh"/>`,
		"fallback": "mingcute:git-pull-request-create-arrow-line",
	});
}

export default Component;
