import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aeecv1a4a.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/n/ns8tfaccm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="aeecv1a4a"/><path class="ykqnlnbbe"/><path class="ns8tfaccm"/></g>`,
		"fallback": "struq:calendar",
	});
}

export default Component;
