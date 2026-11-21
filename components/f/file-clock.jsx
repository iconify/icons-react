import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/m/mno380iqb.css';
import '../../css/s/syp171bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="boz1ay-3b"/><path class="mno380iqb"/><circle class="syp171bgz"/></g>`,
		"fallback": "lucide:file-clock",
	});
}

export default Component;
