import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-g3icchj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-g3icchj"/>`,
		"fallback": "tabler:box-align-bottom-right-filled",
	});
}

export default Component;
