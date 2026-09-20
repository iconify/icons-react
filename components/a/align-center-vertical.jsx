import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs4vcfb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs4vcfb4b"/>`,
		"fallback": "vadivam:align-center-vertical",
	});
}

export default Component;
