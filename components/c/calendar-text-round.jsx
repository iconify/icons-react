import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf60v8bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf60v8bar"/>`,
		"fallback": "coolicons:calendar-text-round",
	});
}

export default Component;
