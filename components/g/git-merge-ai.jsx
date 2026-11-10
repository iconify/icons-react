import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vsn0z__lx.css';
import '../../css/m/mz7t9b1rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vsn0z__lx"/><path class="mz7t9b1rc"/></g>`,
		"fallback": "tabler:git-merge-ai",
	});
}

export default Component;
