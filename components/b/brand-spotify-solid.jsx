import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su566vbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su566vbye"/>`,
		"fallback": "mynaui:brand-spotify-solid",
	});
}

export default Component;
