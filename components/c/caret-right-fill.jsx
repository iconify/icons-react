import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t0zzyvbgp.css';
import '../../css/i/imzag9cmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t0zzyvbgp"/><path class="imzag9cmd"/></g>`,
		"fallback": "keyline-icons:caret-right-fill",
	});
}

export default Component;
