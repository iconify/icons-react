import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgigi6f3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgigi6f3h"/>`,
		"fallback": "vadivam:align-horizontal-distribute-end",
	});
}

export default Component;
