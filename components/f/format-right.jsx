import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hve_623ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hve_623ci"/>`,
		"fallback": "gg:format-right",
	});
}

export default Component;
