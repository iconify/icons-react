import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re3r4xblg.css';
import '../../css/n/nq37i1bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re3r4xblg"/><path clip-rule="evenodd" class="nq37i1bls"/>`,
		"fallback": "mingcute:folder-locked-2-fill",
	});
}

export default Component;
