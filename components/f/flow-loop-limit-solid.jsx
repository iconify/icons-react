import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqu27ibwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqu27ibwq"/>`,
		"fallback": "iconaut:flow-loop-limit-solid",
	});
}

export default Component;
