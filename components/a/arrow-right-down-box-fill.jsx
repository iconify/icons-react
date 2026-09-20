import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdv2mzb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdv2mzb1f"/>`,
		"fallback": "ri:arrow-right-down-box-fill",
	});
}

export default Component;
