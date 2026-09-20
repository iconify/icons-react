import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/adt76cbpe.css';
import '../../css/m/m8ennwbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="adt76cbpe"/><rect class="m8ennwbub"/></g>`,
		"fallback": "lucide:car-battery",
	});
}

export default Component;
