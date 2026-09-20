import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5biwmbup.css';
import '../../css/k/k8g6v0u2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5biwmbup"/><path class="k8g6v0u2f"/>`,
		"fallback": "selfhst:etherpad-light",
	});
}

export default Component;
