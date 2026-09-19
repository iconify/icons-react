import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yz5cs6--h.css';
import '../../css/e/eyfumdg2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yz5cs6--h"/><path class="eyfumdg2t"/></g>`,
		"fallback": "healthicons:coughing2x-outline",
	});
}

export default Component;
