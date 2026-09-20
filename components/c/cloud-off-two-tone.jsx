import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzsiy7bby.css';
import '../../css/b/b1u2suopy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mzsiy7bby"/><path class="b1u2suopy"/></g>`,
		"fallback": "keyline-icons:cloud-off-two-tone",
	});
}

export default Component;
