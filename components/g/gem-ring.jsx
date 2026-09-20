import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/awj46d35y.css';
import '../../css/c/cs2yu6boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="awj46d35y"/><circle class="cs2yu6boo"/></g>`,
		"fallback": "lucide-lab:gem-ring",
	});
}

export default Component;
