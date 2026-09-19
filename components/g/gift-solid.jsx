import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcufhmu7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcufhmu7t"/>`,
		"fallback": "heroicons:gift-solid",
	});
}

export default Component;
