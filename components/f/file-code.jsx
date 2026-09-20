import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kb5ad6bed.css';
import '../../css/j/j61axnofj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kb5ad6bed"/><path class="j61axnofj"/></g>`,
		"fallback": "vadivam:file-code",
	});
}

export default Component;
