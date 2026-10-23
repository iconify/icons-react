import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vpxbk9zfa.css';
import '../../css/e/ecckyvbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vpxbk9zfa"/><path class="ecckyvbat"/></g>`,
		"fallback": "vadivam:files",
	});
}

export default Component;
