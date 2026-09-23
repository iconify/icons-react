import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0dfs-b6d.css';
import '../../css/m/m0fjq6bji.css';
import '../../css/t/tyn_20b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h0dfs-b6d"/><path class="m0fjq6bji"/><path class="tyn_20b6i"/></g>`,
		"fallback": "keyline-icons:heart-sparkles-two-tone",
	});
}

export default Component;
