import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-ohvabme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-ohvabme"/>`,
		"fallback": "griddy-icons:check-circle-alt-03",
	});
}

export default Component;
