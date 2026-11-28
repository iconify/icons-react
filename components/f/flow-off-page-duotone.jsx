import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej3j5_fhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej3j5_fhc primary"/>`,
		"fallback": "iconaut:flow-off-page-duotone",
	});
}

export default Component;
