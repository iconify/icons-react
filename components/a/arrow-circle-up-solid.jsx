import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfpj2xyvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfpj2xyvm"/>`,
		"fallback": "la:arrow-circle-up-solid",
	});
}

export default Component;
