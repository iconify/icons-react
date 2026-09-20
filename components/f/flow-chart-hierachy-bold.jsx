import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvn5oaboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nvn5oaboj"/>`,
		"fallback": "streamline-ultimate:flow-chart-hierachy-bold",
	});
}

export default Component;
