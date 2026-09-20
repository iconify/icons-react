import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfelj7bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfelj7bsd"/>`,
		"fallback": "tabler:h-1",
	});
}

export default Component;
