import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix83fwqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix83fwqx"/>`,
		"fallback": "selfhst:github-light",
	});
}

export default Component;
