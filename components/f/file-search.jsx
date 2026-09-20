import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n02wsu58a.css';
import '../../css/k/kb5ad6bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n02wsu58a"/><path class="kb5ad6bed"/></g>`,
		"fallback": "vadivam:file-search",
	});
}

export default Component;
