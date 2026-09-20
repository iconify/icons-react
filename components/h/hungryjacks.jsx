import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifw71cb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifw71cb6a"/>`,
		"fallback": "simple-icons:hungryjacks",
	});
}

export default Component;
