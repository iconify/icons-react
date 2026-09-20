import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avoltjbjo.css';
import '../../css/g/g11939bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="avoltjbjo"/><path class="g11939bnk"/></g>`,
		"fallback": "lucide:form-input",
	});
}

export default Component;
