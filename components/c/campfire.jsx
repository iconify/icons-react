import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af0ycwbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af0ycwbsv"/>`,
		"fallback": "noviair-light:campfire",
	});
}

export default Component;
