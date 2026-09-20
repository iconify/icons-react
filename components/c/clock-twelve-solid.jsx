import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpgziacym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpgziacym"/>`,
		"fallback": "mynaui:clock-twelve-solid",
	});
}

export default Component;
