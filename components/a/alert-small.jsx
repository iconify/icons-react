import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvol2gbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvol2gbhh"/>`,
		"fallback": "tabler:alert-small",
	});
}

export default Component;
