import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aotj56u1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aotj56u1n"/>`,
		"fallback": "icon-park:hexagon-one",
	});
}

export default Component;
