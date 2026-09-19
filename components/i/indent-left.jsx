import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad3ep5b7v.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad3ep5b7v"/>`,
		"fallback": "websymbol:indent-left",
	});
}

export default Component;
