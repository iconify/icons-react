import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2-4v5bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2-4v5bpi"/>`,
		"fallback": "tabler:crop-3-2",
	});
}

export default Component;
