import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7vzd4f3k.css';
import '../../css/y/ygishbc1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7vzd4f3k"/><path class="ygishbc1r"/></g>`,
		"fallback": "lucide:bird",
	});
}

export default Component;
