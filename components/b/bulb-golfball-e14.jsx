import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayml4ibqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayml4ibqi"/>`,
		"fallback": "cbi:bulb-golfball-e14",
	});
}

export default Component;
