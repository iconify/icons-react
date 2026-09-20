import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iv9uiublq.css';
import '../../css/z/zkq8hsb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iv9uiublq"/><rect class="zkq8hsb7v"/></g>`,
		"fallback": "lucide-lab:bottle-perfume",
	});
}

export default Component;
