import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utd3f6fhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utd3f6fhw"/>`,
		"fallback": "uil:clipboard-notes",
	});
}

export default Component;
