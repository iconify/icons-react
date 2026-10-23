import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-mfq5b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-mfq5b9o"/>`,
		"fallback": "vadivam:flask-conical-off",
	});
}

export default Component;
