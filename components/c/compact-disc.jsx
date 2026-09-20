import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjhrwr1mk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjhrwr1mk"/>`,
		"fallback": "la:compact-disc",
	});
}

export default Component;
