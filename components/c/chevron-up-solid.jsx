import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pksxh-eye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pksxh-eye"/>`,
		"fallback": "pixel:chevron-up-solid",
	});
}

export default Component;
