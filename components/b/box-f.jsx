import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oly8rvbyg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oly8rvbyg"/>`,
		"fallback": "jam:box-f",
	});
}

export default Component;
