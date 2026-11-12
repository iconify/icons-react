import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp5s9ylyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp5s9ylyp"/>`,
		"fallback": "selfhst:antora-dark",
	});
}

export default Component;
