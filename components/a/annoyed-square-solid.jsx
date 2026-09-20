import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo4k8bv1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo4k8bv1b"/>`,
		"fallback": "mynaui:annoyed-square-solid",
	});
}

export default Component;
