import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef-7fk3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef-7fk3tm"/>`,
		"fallback": "thesvg-color:dhl",
	});
}

export default Component;
