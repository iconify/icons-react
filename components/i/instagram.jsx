import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smmhmy9uy.css';

const viewBox = {"width":740,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smmhmy9uy"/>`,
		"fallback": "il:instagram",
	});
}

export default Component;
