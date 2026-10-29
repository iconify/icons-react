import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ure9msbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ure9msbwb"/>`,
		"fallback": "withicons:align-center-solid",
	});
}

export default Component;
