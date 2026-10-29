import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo6olfbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo6olfbfh"/>`,
		"fallback": "vadivam:arrow-down-0-1",
	});
}

export default Component;
