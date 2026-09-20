import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2q9f7dwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2q9f7dwk"/>`,
		"fallback": "ri:file-4-line",
	});
}

export default Component;
