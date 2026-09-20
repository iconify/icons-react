import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lukw5lboi.css';
import '../../css/t/t_hl83buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lukw5lboi"/><path class="t_hl83buc"/></g>`,
		"fallback": "lucide:folder-code",
	});
}

export default Component;
