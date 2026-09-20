import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb0t-rbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb0t-rbcx"/>`,
		"fallback": "simple-icons:canonical",
	});
}

export default Component;
