import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqvhahbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqvhahbwt"/>`,
		"fallback": "vadivam:circle-fading-plus",
	});
}

export default Component;
