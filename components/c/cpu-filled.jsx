import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3jnswbyn.css';
import '../../css/n/n3b-hhblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3jnswbyn"/><path clip-rule="evenodd" class="n3b-hhblt"/>`,
		"fallback": "lucide-extended:cpu-filled",
	});
}

export default Component;
