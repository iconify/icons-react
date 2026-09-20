import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/znjoomhbq.css';
import '../../css/q/qi3dvmbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="znjoomhbq"/><path class="qi3dvmbay"/></g>`,
		"fallback": "tabler:arrow-bear-right",
	});
}

export default Component;
