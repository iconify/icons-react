import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1ck9ujgt.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1ck9ujgt"/>`,
		"fallback": "lineicons:crane-4",
	});
}

export default Component;
