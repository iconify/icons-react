import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp9s_mb9m.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp9s_mb9m"/>`,
		"fallback": "fa-solid:fish",
	});
}

export default Component;
