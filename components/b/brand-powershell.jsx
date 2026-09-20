import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p00okzb1b.css';
import '../../css/s/s0thzbb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p00okzb1b"/><path class="s0thzbb6w"/></g>`,
		"fallback": "tabler:brand-powershell",
	});
}

export default Component;
