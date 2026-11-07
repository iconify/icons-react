import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn92h86ac.css';
import '../../css/v/v8a66ebgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn92h86ac"/><path class="v8a66ebgj"/>`,
		"fallback": "solar:arrow-up-to-line-bold-duotone",
	});
}

export default Component;
