import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/begac2b9o.css';
import '../../css/g/g93du3baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="begac2b9o"/><path class="g93du3baw"/></g>`,
		"fallback": "lucide:brick-wall-shield",
	});
}

export default Component;
