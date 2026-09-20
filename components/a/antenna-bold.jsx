import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta4gnrc5z.css';
import '../../css/n/ncb98mbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta4gnrc5z"/><path class="ncb98mbya"/>`,
		"fallback": "streamline-ultimate:antenna-bold",
	});
}

export default Component;
