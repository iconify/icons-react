import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn5s1xbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn5s1xbha"/>`,
		"fallback": "ri:expand-width-fill",
	});
}

export default Component;
