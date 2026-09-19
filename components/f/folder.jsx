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
		"content": `<polygon points="1.75 2.75 1.75 13.25 14.25 13.25 14.25 4.75 8.25 4.75 6.75 2.75" class="hntgybcog"/>`,
		"fallback": "charm:folder",
	});
}

export default Component;
