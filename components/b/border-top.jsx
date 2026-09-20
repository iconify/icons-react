import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5ubl_bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5ubl_bsx"/>`,
		"fallback": "mdi-light:border-top",
	});
}

export default Component;
