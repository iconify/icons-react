import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_cedqbzi.css';
import '../../css/e/eh4tp1lib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u_cedqbzi"/><path class="eh4tp1lib"/></g>`,
		"fallback": "lucide:file-symlink",
	});
}

export default Component;
