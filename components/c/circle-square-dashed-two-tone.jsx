import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zaxsh8bsw.css';
import '../../css/t/t1gcaccwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zaxsh8bsw"/><path class="t1gcaccwi"/></g>`,
		"fallback": "keyline-icons:circle-square-dashed-two-tone",
	});
}

export default Component;
