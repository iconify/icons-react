import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c69i5qb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c69i5qb_e"/>`,
		"fallback": "vadivam:file-digit",
	});
}

export default Component;
