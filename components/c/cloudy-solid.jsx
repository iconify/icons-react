import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfjtlrbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfjtlrbik"/>`,
		"fallback": "mynaui:cloudy-solid",
	});
}

export default Component;
