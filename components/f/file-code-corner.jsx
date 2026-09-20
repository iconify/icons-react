import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zje_pcbst.css';
import '../../css/v/vcr0rwb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zje_pcbst"/><path class="vcr0rwb7m"/></g>`,
		"fallback": "lucide:file-code-corner",
	});
}

export default Component;
