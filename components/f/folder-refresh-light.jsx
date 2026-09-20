import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vism6qblg.css';
import '../../css/n/nnx_4qb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vism6qblg"/><path class="nnx_4qb_d"/>`,
		"fallback": "stash:folder-refresh-light",
	});
}

export default Component;
