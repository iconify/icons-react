import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy610q88y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy610q88y"/>`,
		"fallback": "vadivam:clef-alto",
	});
}

export default Component;
