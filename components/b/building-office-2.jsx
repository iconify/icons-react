import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agwbi96kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agwbi96kj"/>`,
		"fallback": "heroicons:building-office-2",
	});
}

export default Component;
