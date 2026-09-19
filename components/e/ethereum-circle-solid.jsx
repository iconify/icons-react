import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffd1q6b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffd1q6b2d"/>`,
		"fallback": "iconoir:ethereum-circle-solid",
	});
}

export default Component;
