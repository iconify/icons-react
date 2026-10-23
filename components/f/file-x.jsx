import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzxc1dbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzxc1dbej"/>`,
		"fallback": "vadivam:file-x",
	});
}

export default Component;
