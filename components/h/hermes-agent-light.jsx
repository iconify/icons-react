import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da8y-n0pu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da8y-n0pu"/>`,
		"fallback": "selfhst:hermes-agent-light",
	});
}

export default Component;
