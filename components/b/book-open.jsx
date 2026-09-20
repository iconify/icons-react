import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttenm5bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttenm5bia"/>`,
		"fallback": "vadivam:book-open",
	});
}

export default Component;
