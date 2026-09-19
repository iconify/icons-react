import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr5-lrekc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr5-lrekc"/>`,
		"fallback": "heroicons:cpu-chip",
	});
}

export default Component;
