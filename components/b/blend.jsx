import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgpmj5glp.css';
import '../../css/v/v98c6hqtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="lgpmj5glp"/><circle class="v98c6hqtn"/></g>`,
		"fallback": "lucide:blend",
	});
}

export default Component;
