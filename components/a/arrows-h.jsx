import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g76lpwfho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g76lpwfho"/>`,
		"fallback": "gg:arrows-h",
	});
}

export default Component;
