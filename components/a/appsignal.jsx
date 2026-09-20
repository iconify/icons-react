import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyq_t3ubt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyq_t3ubt"/>`,
		"fallback": "thesvg-color:appsignal",
	});
}

export default Component;
