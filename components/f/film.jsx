import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4r73fbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4r73fbry"/>`,
		"fallback": "vadivam:film",
	});
}

export default Component;
