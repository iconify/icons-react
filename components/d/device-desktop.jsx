import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q516cpmjh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q516cpmjh"/>`,
		"fallback": "f7:device-desktop",
	});
}

export default Component;
