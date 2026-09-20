import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-jnk8bgj.css';
import '../../css/z/zbai3cbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-jnk8bgj"/><path class="zbai3cbwh"/></g>`,
		"fallback": "tabler:helmet",
	});
}

export default Component;
