import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ri8rtqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ri8rtqi"/>`,
		"fallback": "thesvg-color:baremetrics",
	});
}

export default Component;
