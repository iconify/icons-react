import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vybouiput.css';
import '../../css/k/kt8n5eewz.css';
import '../../css/o/o50ddxiay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vybouiput"/><path class="kt8n5eewz"/><circle class="o50ddxiay"/></g>`,
		"fallback": "lucide:file-music",
	});
}

export default Component;
