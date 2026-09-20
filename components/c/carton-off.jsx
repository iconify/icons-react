import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pl2c4ij9x.css';
import '../../css/b/b50pvdbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pl2c4ij9x"/><path class="b50pvdbzn"/></g>`,
		"fallback": "lucide-lab:carton-off",
	});
}

export default Component;
