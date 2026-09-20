import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne1b9cdgs.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne1b9cdgs"/>`,
		"fallback": "maki:fitness-centre-11",
	});
}

export default Component;
