import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cqe1ttbfi.css';
import '../../css/a/a0iicqbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cqe1ttbfi"/><path class="a0iicqbdj"/></g>`,
		"fallback": "vadivam:file-type",
	});
}

export default Component;
