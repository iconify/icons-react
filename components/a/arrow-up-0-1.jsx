import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfrf13hpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfrf13hpr"/>`,
		"fallback": "vadivam:arrow-up-0-1",
	});
}

export default Component;
