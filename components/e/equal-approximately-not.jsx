import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxm52nb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxm52nb9b"/>`,
		"fallback": "vadivam:equal-approximately-not",
	});
}

export default Component;
