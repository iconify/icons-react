import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/arpm_bbij.css';
import '../../css/v/v0t8ctopr.css';
import '../../css/k/k0ut41rtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="arpm_bbij"/><path class="v0t8ctopr"/><path class="k0ut41rtn"/></g>`,
		"fallback": "withicons-bauhaus:avatar-fox",
	});
}

export default Component;
