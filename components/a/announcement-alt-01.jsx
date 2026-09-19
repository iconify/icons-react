import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbgg8ow9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbgg8ow9c"/>`,
		"fallback": "griddy-icons:announcement-alt-01",
	});
}

export default Component;
