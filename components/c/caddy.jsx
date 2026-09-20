import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8tbmnbml.css';
import '../../css/k/kpb0wubyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8tbmnbml"/><path class="kpb0wubyn"/>`,
		"fallback": "selfhst:caddy",
	});
}

export default Component;
