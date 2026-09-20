import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oh14ly7za.css';
import '../../css/v/vt87t1j6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oh14ly7za"/><path class="vt87t1j6l"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-duotone",
	});
}

export default Component;
