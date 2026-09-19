import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gey20ubqc.css';
import '../../css/w/wa4wf2brm.css';
import '../../css/r/r4god8b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="gey20ubqc"/><path class="wa4wf2brm"/><path class="r4god8b6l"/></g>`,
		"fallback": "iconamoon:briefcase-light",
	});
}

export default Component;
