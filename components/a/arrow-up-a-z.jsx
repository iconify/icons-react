import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjpr_6-3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjpr_6-3b"/>`,
		"fallback": "vadivam:arrow-up-a-z",
	});
}

export default Component;
