import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdgw9rb_q.css';
import '../../css/o/od3yshbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mdgw9rb_q"/><path class="od3yshbep"/></g>`,
		"fallback": "lucide:folder-down",
	});
}

export default Component;
