import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmp864_0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmp864_0s"/>`,
		"fallback": "vadivam:cloud-check",
	});
}

export default Component;
