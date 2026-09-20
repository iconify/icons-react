import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cobpw81wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cobpw81wq"/>`,
		"fallback": "ri:ball-pen-fill",
	});
}

export default Component;
