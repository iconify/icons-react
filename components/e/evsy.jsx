import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voly0lboc.css';
import '../../css/h/hcopf7b5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voly0lboc"/><path class="hcopf7b5t"/>`,
		"fallback": "selfhst:evsy",
	});
}

export default Component;
