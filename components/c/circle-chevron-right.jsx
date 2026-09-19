import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6l5w6gsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6l5w6gsv"/>`,
		"fallback": "ci:circle-chevron-right",
	});
}

export default Component;
