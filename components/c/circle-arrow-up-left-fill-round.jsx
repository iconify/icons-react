import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcflwt4lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcflwt4lk"/>`,
		"fallback": "coolicons:circle-arrow-up-left-fill-round",
	});
}

export default Component;
