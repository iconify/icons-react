import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjavnub5p.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/p/p7ygyecjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qjavnub5p"/><circle class="shu3xdl9q"/><path class="p7ygyecjm"/></g>`,
		"fallback": "lucide:circle-letter-a",
	});
}

export default Component;
