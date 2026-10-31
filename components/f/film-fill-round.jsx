import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku_6aac1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku_6aac1m"/>`,
		"fallback": "coolicons:film-fill-round",
	});
}

export default Component;
