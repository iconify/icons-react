import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foypfgb4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foypfgb4f"/>`,
		"fallback": "selfhst:hashicorp-consul",
	});
}

export default Component;
