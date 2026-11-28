import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nin_08yup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nin_08yup"/>`,
		"fallback": "iconaut:chart-column-big-solid",
	});
}

export default Component;
