import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v27ipbc-t.css';

const viewBox = {"width":500,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v27ipbc-t"/>`,
		"fallback": "brandico:diigo",
	});
}

export default Component;
