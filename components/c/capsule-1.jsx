import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apqzseb6y.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apqzseb6y"/>`,
		"fallback": "lineicons:capsule-1",
	});
}

export default Component;
