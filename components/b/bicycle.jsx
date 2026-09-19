import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbq9c8hyy.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbq9c8hyy"/>`,
		"fallback": "fontisto:bicycle",
	});
}

export default Component;
