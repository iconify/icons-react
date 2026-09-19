import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etj_qccda.css';
import '../../css/x/xz53smi8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etj_qccda"/><path class="xz53smi8c"/>`,
		"fallback": "bx:book-content",
	});
}

export default Component;
