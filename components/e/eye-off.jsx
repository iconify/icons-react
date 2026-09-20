import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9st1u1pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9st1u1pg"/>`,
		"fallback": "mdi:eye-off",
	});
}

export default Component;
