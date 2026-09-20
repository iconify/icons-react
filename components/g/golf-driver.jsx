import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wcp3x94fp.css';
import '../../css/e/em7g-gbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="wcp3x94fp"/><path class="em7g-gbvn"/></g>`,
		"fallback": "lucide-lab:golf-driver",
	});
}

export default Component;
