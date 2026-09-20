import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tav20gbwz.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tav20gbwz"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:info-circle-solid",
	});
}

export default Component;
