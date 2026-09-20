import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocj-alamt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocj-alamt"/>`,
		"fallback": "vadivam:align-vertical-distribute-center",
	});
}

export default Component;
