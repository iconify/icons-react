import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vniq9i6ae.css';
import '../../css/q/qravvf8eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vniq9i6ae"/><path class="qravvf8eg"/></g>`,
		"fallback": "coolicons:folder-edit-corner-duocolor-round",
	});
}

export default Component;
