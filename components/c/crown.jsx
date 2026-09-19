import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cru_83b9u.css';
import '../../css/s/sg6gykbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cru_83b9u"/><path class="sg6gykbgm"/></g>`,
		"fallback": "akar-icons:crown",
	});
}

export default Component;
