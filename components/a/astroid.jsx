import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6u9v2bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6u9v2bvk"/>`,
		"fallback": "vadivam:astroid",
	});
}

export default Component;
