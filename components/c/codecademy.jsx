import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pphx8ib2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pphx8ib2l"/>`,
		"fallback": "thesvg-color:codecademy",
	});
}

export default Component;
