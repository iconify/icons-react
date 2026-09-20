import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az26ljbfa.css';
import '../../css/c/cikki1bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="az26ljbfa"/><path class="cikki1bfs"/></g>`,
		"fallback": "lucide-lab:hedgehog",
	});
}

export default Component;
