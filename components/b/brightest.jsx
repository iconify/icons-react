import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsce67bmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsce67bmr"/>`,
		"fallback": "subway:brightest",
	});
}

export default Component;
