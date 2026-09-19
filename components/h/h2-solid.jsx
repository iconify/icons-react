import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvyz_x15a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvyz_x15a"/>`,
		"fallback": "heroicons:h2-solid",
	});
}

export default Component;
