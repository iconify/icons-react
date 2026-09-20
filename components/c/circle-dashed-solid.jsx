import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foa7u6bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foa7u6bdb"/>`,
		"fallback": "mynaui:circle-dashed-solid",
	});
}

export default Component;
