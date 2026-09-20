import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7s9-jffa.css';
import '../../css/p/ptznwjbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7s9-jffa"/><path class="ptznwjbqi"/></g>`,
		"fallback": "tabler:chart-pie",
	});
}

export default Component;
