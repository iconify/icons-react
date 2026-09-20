import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9fr2gbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9fr2gbrn"/>`,
		"fallback": "pixel:box-usd-solid",
	});
}

export default Component;
