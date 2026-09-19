import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcgl4ebri.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcgl4ebri"/>`,
		"fallback": "cib:bing",
	});
}

export default Component;
