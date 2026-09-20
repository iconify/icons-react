import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weuc8pb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weuc8pb1r"/>`,
		"fallback": "vadivam:activity",
	});
}

export default Component;
