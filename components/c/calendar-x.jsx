import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cret2ebde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cret2ebde"/>`,
		"fallback": "vadivam:calendar-x",
	});
}

export default Component;
