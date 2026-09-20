import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwyah0bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwyah0bbl"/>`,
		"fallback": "mynaui:chart-pie-one",
	});
}

export default Component;
