import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1b9jcbak.css';
import '../../css/n/nywwhyjhu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1b9jcbak"/><path class="nywwhyjhu"/>`,
		"fallback": "devicon-plain:argocd",
	});
}

export default Component;
