import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5vnpthlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5vnpthlp"/>`,
		"fallback": "ri:collapse-horizontal-line",
	});
}

export default Component;
