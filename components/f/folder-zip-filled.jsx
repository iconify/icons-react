import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3t8n_b1o.css';
import '../../css/j/jit9i0epo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3t8n_b1o"/><path class="jit9i0epo"/>`,
		"fallback": "boxicons:folder-zip-filled",
	});
}

export default Component;
