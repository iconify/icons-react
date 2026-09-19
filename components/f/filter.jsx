import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<polygon points="1.75 1.75 14.25 1.75 14.25 3.25 9.25 8.75 9.25 12.75 6.75 14.25 6.75 8.75 1.75 3.25" class="hntgybcog"/>`,
		"fallback": "charm:filter",
	});
}

export default Component;
