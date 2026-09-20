import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brwa9j5pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brwa9j5pf"/>`,
		"fallback": "vadivam:app-window",
	});
}

export default Component;
