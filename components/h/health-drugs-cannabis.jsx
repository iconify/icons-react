import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7xpljjum.css';
import '../../css/w/wsh9lzbew.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7xpljjum"/><path class="wsh9lzbew"/>`,
		"fallback": "streamline-pixel:health-drugs-cannabis",
	});
}

export default Component;
