import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cjdqqtbxw.css';
import '../../css/v/vivx11brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cjdqqtbxw"/><circle class="vivx11brz"/></g>`,
		"fallback": "majesticons:covid-line",
	});
}

export default Component;
