import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs0u1_bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs0u1_bxr"/>`,
		"fallback": "thesvg-color:common-workflow-language",
	});
}

export default Component;
