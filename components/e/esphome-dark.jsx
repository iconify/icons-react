import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz5434rjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz5434rjy"/>`,
		"fallback": "selfhst:esphome-dark",
	});
}

export default Component;
