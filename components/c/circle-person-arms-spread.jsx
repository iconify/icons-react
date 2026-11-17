import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmta-hb1g.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/i/idbbthb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmta-hb1g"/><circle class="shu3xdl9q"/><circle class="idbbthb2f"/></g>`,
		"fallback": "lucide:circle-person-arms-spread",
	});
}

export default Component;
