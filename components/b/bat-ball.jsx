import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lyok8tb9e.css';
import '../../css/g/gs5bmi04h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="lyok8tb9e"/><path class="gs5bmi04h"/></g>`,
		"fallback": "lucide-lab:bat-ball",
	});
}

export default Component;
