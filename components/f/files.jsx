import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5h_vlb0m.css';
import '../../css/n/n78ttq-1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p5h_vlb0m"/><path class="n78ttq-1q"/></g>`,
		"fallback": "lucide:files",
	});
}

export default Component;
