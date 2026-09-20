import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr6mrrb1n.css';
import '../../css/a/aqhok2bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kr6mrrb1n"/><circle class="aqhok2bbj"/></g>`,
		"fallback": "lucide:bolt",
	});
}

export default Component;
