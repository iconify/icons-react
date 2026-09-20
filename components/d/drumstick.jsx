import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/guo4a44jv.css';
import '../../css/u/ujlgpbbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="guo4a44jv"/><path class="ujlgpbbyg"/></g>`,
		"fallback": "lucide:drumstick",
	});
}

export default Component;
