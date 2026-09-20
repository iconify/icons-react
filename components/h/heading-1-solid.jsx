import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz931_bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz931_bdu"/>`,
		"fallback": "pixel:heading-1-solid",
	});
}

export default Component;
