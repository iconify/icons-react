import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc23krbqo.css';
import '../../css/j/jdqdflbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zc23krbqo"/><path class="jdqdflbdb"/></g>`,
		"fallback": "tabler:arrow-bear-right-2",
	});
}

export default Component;
