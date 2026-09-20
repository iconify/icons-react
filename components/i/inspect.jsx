import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/riira9pvx.css';
import '../../css/m/mqr7uytzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="riira9pvx"/><path class="mqr7uytzb"/></g>`,
		"fallback": "lucide:inspect",
	});
}

export default Component;
