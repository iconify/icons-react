import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry82r9o5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry82r9o5t"/>`,
		"fallback": "vadivam:bluetooth-searching",
	});
}

export default Component;
