import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrs4upb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrs4upb9a"/>`,
		"fallback": "noviair:flashlight-check",
	});
}

export default Component;
