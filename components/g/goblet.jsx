import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tojm1sbnd.css';
import '../../css/q/qshlnqb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tojm1sbnd"/><path class="qshlnqb8m"/></g>`,
		"fallback": "lucide-lab:goblet",
	});
}

export default Component;
