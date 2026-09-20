import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m2ljm37ev.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/f/fv913ubql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m2ljm37ev"/><circle class="cql1pwtbp"/><path class="fv913ubql"/></g>`,
		"fallback": "lucide-lab:baby-pacifier",
	});
}

export default Component;
