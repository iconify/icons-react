import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvexj_b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvexj_b6i"/>`,
		"fallback": "selfhst:digitalocean-light",
	});
}

export default Component;
