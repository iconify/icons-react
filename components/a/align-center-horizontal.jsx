import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zucb4acff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zucb4acff"/>`,
		"fallback": "vadivam:align-center-horizontal",
	});
}

export default Component;
