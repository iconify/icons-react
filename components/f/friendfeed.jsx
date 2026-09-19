import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu8rbqb_z.css';

const viewBox = {"width":957.348,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu8rbqb_z"/>`,
		"fallback": "brandico:friendfeed",
	});
}

export default Component;
