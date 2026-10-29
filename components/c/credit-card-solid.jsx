import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-4a-kbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-4a-kbti"/>`,
		"fallback": "withicons:credit-card-solid",
	});
}

export default Component;
