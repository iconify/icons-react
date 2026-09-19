import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsc_azbss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsc_azbss"/>`,
		"fallback": "carbon:align-vertical-top",
	});
}

export default Component;
