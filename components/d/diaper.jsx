import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nol46eswv.css';
import '../../css/w/w7c4a8b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nol46eswv"/><path class="w7c4a8b4s"/></g>`,
		"fallback": "lucide-lab:diaper",
	});
}

export default Component;
