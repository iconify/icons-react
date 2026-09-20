import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk8-gndff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk8-gndff"/>`,
		"fallback": "tabler:arrow-left-tail",
	});
}

export default Component;
