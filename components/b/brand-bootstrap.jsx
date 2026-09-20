import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8z6mjbxj.css';
import '../../css/u/u43sl660a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b8z6mjbxj"/><path class="u43sl660a"/></g>`,
		"fallback": "tabler:brand-bootstrap",
	});
}

export default Component;
