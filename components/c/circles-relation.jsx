import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owl1zxb0g.css';
import '../../css/m/m21ujybmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="owl1zxb0g"/><path class="m21ujybmf"/></g>`,
		"fallback": "tabler:circles-relation",
	});
}

export default Component;
