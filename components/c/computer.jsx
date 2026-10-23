import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r08_g5bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r08_g5bzv"/>`,
		"fallback": "vadivam:computer",
	});
}

export default Component;
