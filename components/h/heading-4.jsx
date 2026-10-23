import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9e7o7bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9e7o7bng"/>`,
		"fallback": "vadivam:heading-4",
	});
}

export default Component;
