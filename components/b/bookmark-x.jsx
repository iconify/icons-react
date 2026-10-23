import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugma2jbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugma2jbsn"/>`,
		"fallback": "vadivam:bookmark-x",
	});
}

export default Component;
