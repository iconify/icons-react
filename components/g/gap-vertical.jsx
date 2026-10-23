import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r36lvjb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r36lvjb_b"/>`,
		"fallback": "vadivam:gap-vertical",
	});
}

export default Component;
