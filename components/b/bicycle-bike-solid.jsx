import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf9zuvbpr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kf9zuvbpr"/>`,
		"fallback": "streamline-flex:bicycle-bike-solid",
	});
}

export default Component;
