import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7szmbwkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7szmbwkc"/>`,
		"fallback": "mynaui:annoyed-solid",
	});
}

export default Component;
