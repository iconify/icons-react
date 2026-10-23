import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez92r_4pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez92r_4pu"/>`,
		"fallback": "vadivam:dice-5",
	});
}

export default Component;
