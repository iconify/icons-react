import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc24q9xfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc24q9xfo"/>`,
		"fallback": "thesvg-color:hashicorp",
	});
}

export default Component;
