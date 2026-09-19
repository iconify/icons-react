import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt_urbb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt_urbb7y"/>`,
		"fallback": "hugeicons:cloud-angled-rain-zap",
	});
}

export default Component;
