import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iijut148h.css';
import '../../css/v/vgjh9ibgd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iijut148h"/><path class="vgjh9ibgd"/></g>`,
		"fallback": "teenyicons:certificate-solid",
	});
}

export default Component;
