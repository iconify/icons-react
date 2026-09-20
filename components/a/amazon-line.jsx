import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpcnm8v0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpcnm8v0a"/>`,
		"fallback": "ri:amazon-line",
	});
}

export default Component;
