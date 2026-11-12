import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3k-rut9k.css';
import '../../css/v/val4s82hw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g3k-rut9k"/><path class="val4s82hw"/>`,
		"fallback": "selfhst:accent",
	});
}

export default Component;
