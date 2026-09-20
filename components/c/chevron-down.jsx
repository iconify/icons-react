import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npjel3gno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npjel3gno"/>`,
		"fallback": "vadivam:chevron-down",
	});
}

export default Component;
