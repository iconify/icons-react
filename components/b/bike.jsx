import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p85_17h2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p85_17h2y"/>`,
		"fallback": "tabler:bike",
	});
}

export default Component;
