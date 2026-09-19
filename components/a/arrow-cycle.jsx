import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfxu3bcbx.css';
import '../../css/i/i555kubjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cfxu3bcbx"/><path class="i555kubjx"/></g>`,
		"fallback": "akar-icons:arrow-cycle",
	});
}

export default Component;
