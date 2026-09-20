import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eoso9tben.css';
import '../../css/m/m6ba-jbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eoso9tben"/><path class="m6ba-jbix"/></g>`,
		"fallback": "tabler:corner-left-up-double",
	});
}

export default Component;
