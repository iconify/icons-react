import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is6skxrui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is6skxrui"/>`,
		"fallback": "feather:dollar-sign",
	});
}

export default Component;
