import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyureyb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyureyb2o"/>`,
		"fallback": "heroicons-outline:adjustments",
	});
}

export default Component;
