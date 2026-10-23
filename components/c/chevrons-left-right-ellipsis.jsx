import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjtwiib6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjtwiib6i"/>`,
		"fallback": "vadivam:chevrons-left-right-ellipsis",
	});
}

export default Component;
