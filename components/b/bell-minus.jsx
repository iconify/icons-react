import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_1x9gbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_1x9gbec"/>`,
		"fallback": "vadivam:bell-minus",
	});
}

export default Component;
