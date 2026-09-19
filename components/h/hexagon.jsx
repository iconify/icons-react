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
		"content": `<polygon points="1.75 4.75 8 1.25 14.25 4.75 14.25 11.25 8 14.75 1.75 11.25" class="hntgybcog"/>`,
		"fallback": "charm:hexagon",
	});
}

export default Component;
