import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1f6jqjto.css';
import '../../css/n/ngy432bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f1f6jqjto"/><path class="ngy432bhd"/></g>`,
		"fallback": "vadivam:clipboard-paste",
	});
}

export default Component;
