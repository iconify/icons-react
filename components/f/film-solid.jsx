import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx7oil4my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx7oil4my"/>`,
		"fallback": "mynaui:film-solid",
	});
}

export default Component;
