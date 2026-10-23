import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fqxz30brl.css';
import '../../css/t/tm5a-nbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fqxz30brl"/><path class="tm5a-nbpj"/></g>`,
		"fallback": "vadivam:folder-heart",
	});
}

export default Component;
