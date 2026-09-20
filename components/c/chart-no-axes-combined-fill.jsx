import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vecmprbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vecmprbqi"/>`,
		"fallback": "keyline-icons:chart-no-axes-combined-fill",
	});
}

export default Component;
