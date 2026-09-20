import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9mg2c54k.css';
import '../../css/w/wh8zzmapl.css';
import '../../css/e/e6omrco6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i9mg2c54k"/><path class="wh8zzmapl"/><path class="e6omrco6v"/></g>`,
		"fallback": "tabler:id-badge-2",
	});
}

export default Component;
