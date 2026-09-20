import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z44npe1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z44npe1px"/>`,
		"fallback": "si:edit-detailed-fill",
	});
}

export default Component;
