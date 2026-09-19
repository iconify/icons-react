import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/a08pi2k5l.css';
import '../../css/x/x26a8iq1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><ellipse transform="rotate(90 12 12)" class="a08pi2k5l"/><path class="x26a8iq1c"/></g>`,
		"fallback": "akar-icons:globe",
	});
}

export default Component;
