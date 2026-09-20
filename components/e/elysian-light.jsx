import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwl3ap3ux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwl3ap3ux"/>`,
		"fallback": "selfhst:elysian-light",
	});
}

export default Component;
