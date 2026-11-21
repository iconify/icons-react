import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlff6acww.css';
import '../../css/s/swsab_86e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlff6acww"/><circle class="swsab_86e"/></g>`,
		"fallback": "lucide:folder-network",
	});
}

export default Component;
