import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izykwd8ix.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izykwd8ix"/>`,
		"fallback": "fontisto:day-cloudy",
	});
}

export default Component;
