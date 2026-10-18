import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzchqyb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzchqyb1d"/>`,
		"fallback": "vadivam:bell-off",
	});
}

export default Component;
