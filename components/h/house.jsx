import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g--hiu7dt.css';
import '../../css/q/qc-qo0m-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g--hiu7dt"/><path class="qc-qo0m-p"/></g>`,
		"fallback": "lucide:house",
	});
}

export default Component;
