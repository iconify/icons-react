import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0yso1ymp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0yso1ymp"/>`,
		"fallback": "vadivam:egg-off",
	});
}

export default Component;
