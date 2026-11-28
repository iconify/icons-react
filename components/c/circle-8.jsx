import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-600_bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-600_bwx"/>`,
		"fallback": "noviair:circle-8",
	});
}

export default Component;
