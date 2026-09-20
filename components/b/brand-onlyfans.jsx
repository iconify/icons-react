import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nya33cb6s.css';
import '../../css/u/uoaei7brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nya33cb6s"/><path class="uoaei7brr"/></g>`,
		"fallback": "tabler:brand-onlyfans",
	});
}

export default Component;
