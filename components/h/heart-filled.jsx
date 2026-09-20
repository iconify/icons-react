import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gpz5f0dae.css';
import '../../css/a/a9hpchiqo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gpz5f0dae"/><path class="a9hpchiqo"/></g>`,
		"fallback": "pepicons-print:heart-filled",
	});
}

export default Component;
