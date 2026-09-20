import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpwrzye_q.css';
import '../../css/o/ovpmcrbvs.css';
import '../../css/g/g88p4ubej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jpwrzye_q"/><path class="ovpmcrbvs"/><path class="g88p4ubej"/></g>`,
		"fallback": "lucide-lab:elephant",
	});
}

export default Component;
