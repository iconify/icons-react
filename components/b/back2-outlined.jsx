import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s88nnip0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s88nnip0i"/>`,
		"fallback": "weui:back2-outlined",
	});
}

export default Component;
