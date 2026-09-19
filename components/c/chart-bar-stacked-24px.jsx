import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_p0p0b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_p0p0b2i"/>`,
		"fallback": "healthicons:chart-bar-stacked-24px",
	});
}

export default Component;
