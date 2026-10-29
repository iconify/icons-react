import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_ezyz8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_ezyz8u"/>`,
		"fallback": "withicons:archive-solid",
	});
}

export default Component;
