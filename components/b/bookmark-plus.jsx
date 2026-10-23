import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb_4qqbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb_4qqbcn"/>`,
		"fallback": "vadivam:bookmark-plus",
	});
}

export default Component;
