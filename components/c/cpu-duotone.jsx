import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fehbssbve.css';
import '../../css/s/s1cml2bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fehbssbve"/><path class="s1cml2bqa"/></g>`,
		"fallback": "keyline-icons:cpu-duotone",
	});
}

export default Component;
