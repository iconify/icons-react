import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts1w9ibpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts1w9ibpe"/>`,
		"fallback": "keyline-icons:building",
	});
}

export default Component;
