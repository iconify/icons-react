import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xje-ysjwq.css';
import '../../css/n/npzbi206w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xje-ysjwq"/><circle class="npzbi206w"/></g>`,
		"fallback": "lucide:anchor",
	});
}

export default Component;
