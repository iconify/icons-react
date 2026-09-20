import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_8f69lhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_8f69lhh"/>`,
		"fallback": "mingcute:add-circle-fill",
	});
}

export default Component;
