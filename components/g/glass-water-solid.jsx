import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyuy5z9fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyuy5z9fw"/>`,
		"fallback": "withicons:glass-water-solid",
	});
}

export default Component;
